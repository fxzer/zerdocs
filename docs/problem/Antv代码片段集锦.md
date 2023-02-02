# 网络拓扑图代码


## 图实例化
```js
import { commonRegister ,viewRegister} './registerElements.js'

//1.初始化实例
initChart() {
  let halfWidth = this.width / 2;
  let halfHeight = this.height / 2;
  if (!this.graph) {
    commonRegister()
    viewRegister()
    const toolbar = new G6.ToolBar({
      position: { x: 10, y: 10 },
      getContent: () => {
         const outDiv = document.createElement('div');
          let style = 'cursor: pointer;vertical-align: middle;line-height:24px;font-size:18px;'
          outDiv.innerHTML = `<ul>
              <li code='zoomOut' style="${style}" class="iconfont icon-fangda" title="放大"></li>
              <li code='zoomIn'  style="${style}" class="iconfont icon-suoxiao" title="缩小"></li>
              <li code='autoZoom' style="${style}" class="iconfont icon-fitscreen24" title="居中"></li>
            </ul>`
          return outDiv
      },
     handleClick: (code) => {
          if (code === 'zoomOut') {
             toolbar.zoomOut()
          } else if (code === 'zoomIn') {
             toolbar.zoomIn()
          }else if(code === 'autoZoom'){
             toolbar.autoZoom()
          }
        }
    });
    this.graph = new G6.Graph({
      container: "topoChart",
      width: this.width,
      height: this.height,
      fitView: true,
      fitViewPadding: 100,
      groupByTypes: false,
      linkCenter: false,
      layout: {
        pipes: [
          {
            // 该子图所使用的布局类型
            type: "circular",
            center: [halfWidth, halfHeight],
            radius: 80,
            nodesFilter: (node) => node.sysType === "vpe",
          },
        ],
      },
      //交互行为相关配置
      modes: {
        default: ["drag-canvas", "zoom-canvas", {type: "drag-combo", shouldEnd(e, parent) {
          if(parent) {
            return false;
          }
          return true;
        }}],
      },
      plugins: [toolbar],
      defaultNode: {
        type: "bubble",
        labelCfg: {
          position: "center",
          style: {
            fill: "white",
            stroke: "#fff",
          },
        },
      },
      defaultEdge: {
        color: "#888",
        type: "animate-line",
      },
      defaultCombo: {
        padding: 1,
        style: {
          cursor: "all-scroll",
        },
        labelCfg: {
          style: {
            opacity: 0,
            fill: "#303133",
            fontSize: 12,
            stroke: "#fff",
          },
        },
      },
    });
    //监听事件
     this.graphBehaviors();
  }
},
graphBehaviors(){
    this.graph.on('node:click',this.debounce(this.eventHandle, 300));
 //this.graph.on('edge:click'... 
},
debounce(fn, delay) {
  const delays = delay || 300;
  let timer;
  return function() {
    const th = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      timer = null;
      fn.apply(th, args);
    }, delays);
  };
},
    //2.查询数据
queryChartData(){
    //处理数据
    this.dealData(data)
}
//3.处理数据
dealData(data ) {
    //VPE节点
    nodes =  ...
    edges = ...
    combos = ...
    this.drawChart(...);
}
//4.渲染数据
drawChart() {
  this.graph.read({
    nodes,
    edges,
    combos,
  });
},

```

```js
mounted() {
    this.chartLoading = true
    this.width = document.getElementById("topoChart").scrollWidth;
    this.height = document.getElementById("topoChart").scrollHeight || 600;
    this.initChart();
    this.queryChartData();
    this.chartLoading = false
    //监听窗口大小变化,重绘网络拓扑
    window.addEventListener('resize',this.rePaint )
  },
beforeDestroy() {
    if (this.graph) {
      this.graph.clear();
      this.graph.destroy();
    }
    this.data = Object.assign(this.$data, this.$options.data());
},
```

## 注册节点

```js
//registerElements.js
import G6 from "@antv/g6";
//共同节点注册
export  function commonRegister(){
  // 注册实线动画
  G6.registerEdge("animate-line",
    {
      drawShape(cfg, group) {
        const self = this;
        let shapeStyle = self.getShapeStyle(cfg);
        shapeStyle = Object.assign(shapeStyle, {
          opacity: 0,
          strokeOpacity: 0,
        });
        const keyShape = group.addShape("path", {
          attrs: shapeStyle,
          name: "path-shape",
        });
        return keyShape;
      },
      afterDraw(cfg, group) {
        const shape = group.get("children")[0];
        //线条动画
        shape.animate(
          (ratio) => {
            const opacity = ratio * cfg.style.opacity;
            const strokeOpacity = ratio * cfg.style.strokeOpacity;
            return {
              opacity: ratio || opacity,
              strokeOpacity: ratio || strokeOpacity,
            };
          },
          {
            duration: 300,
          }
        );
        //箭头动画
        const startPoint = shape.getPoint(0);
        const circle = group.addShape("circle", {
          attrs: {
            x: startPoint.x,
            y: startPoint.y,
            fill: "#1890ff",
            r: 2,
          },
          name: "circle-shape",
        });
        circle.animate(
          (ratio) => {
            const tmpPoint = shape.getPoint(ratio);
            return {
              x: tmpPoint.x,
              y: tmpPoint.y,
            };
          },
          {
            repeat: true,
            duration: 3000,
          }
        );
      },
      setState(name, value, item) {
        const shape = item.get("keyShape");
        if (name === "disappearing" && value) {
          shape.animate(
            (ratio) => {
              return {
                opacity: 1 - ratio,
                strokeOpacity: 1 - ratio,
              };
            },
            {
              duration: 200,
            }
          );
        } else if (name === "dark") {
          if (value) shape.attr("opacity", 0.2);
          else shape.attr("opacity", 1);
        }
      },
    },
    "line"
  );
  //注册iconfont节点
  G6.registerNode("iconfontHub", {
    draw(cfg, group) {
      const { style, labelCfg: labelStyle ,size } = cfg;
      group.addShape("circle", {
        attrs: {
          x: 0,
          y: size / 2,
          r: size,
        },
        name: "hub-bg-shape",
      });
      //添加图标
      const keyShape = group.addShape("text", {
        attrs: {
          x: 0,
          y: size  / 2,
          fontFamily: "iconfont",
          textAlign: "center",
          text: cfg.text,
          fontSize: Math.round(size),
          ...style,
        },
        name: "hub-shape",
      });
      //添加label
      group.addShape("text", {
        attrs: {
          x: 0,
          y: Math.round(size/4),
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.label,
          ...labelStyle.style,
        },
        name: "hub-label",
      });
      return keyShape;
    },
    // afterDraw(cfg, group) {
    //   const shape = group.get('children')[0];
    //   shape.animate(
    //     (ratio) => {
    //       let fill = '#C396ED'
    //       if(ratio > 0.6){
    //         fill = '#FFCF8B'
    //       }else if(ratio > 0.3){
    //         fill = '#C396ED'
    //       }else {
    //         fill = '#75D882'
    //       }
    //       return {
    //         fill,
    //       };
    //     },
    //     {
    //       repeat: true,
    //       duration: 1500,
    //       // easing: 'easeCubic',
    //     },
    //   );
    // },
  });
  //自定义节点和节点动画
  G6.registerNode( "vpe-rect-animate",
    {
    afterDraw(cfg, group) {
      const { width, height, stroke, radius } = this.getShapeStyle(cfg);
      const x = -width / 2,
        y = -height / 2;
      const back1 = group.addShape("rect", {
        zIndex: -3,
        attrs: {
          x: x,
          y: y,
          width: width,
          height: height,
          fill: stroke,
          opacity: 0.6,
          radius,
        },
        name: "rback1-shape",
      });
      const back2 = group.addShape("rect", {
        zIndex: -2,
        attrs: {
          x: x,
          y: y,
          width: width,
          height: height,
          fill: stroke,
          opacity: 0.6,
          radius,
        },
        name: "rback2-shape",
      });
      const back3 = group.addShape("circle", {
        zIndex: -1,
        attrs: {
          x: x,
          y: y,
          width: width,
          height: height,
          fill: stroke,
          opacity: 0.6,
          radius,
        },
        name: "rback3-shape",
      });
      group.sort(); // Sort according to the zIndex
      back1.animate(
        {
          width: width + 10,
          height: height + 10,
          opacity: 0.1,
          x: x - 5,
          y: y - 5,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: -300,
          repeat: true, // repeat
        }
      ); // no delay
      back2.animate(
        {
          width: width + 10,
          height: height + 10,
          opacity: 0.1,
          x: x - 5,
          y: y - 5,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 1000,
          repeat: true,  
        }
      );  
      back3.animate(
        {
          width: width + 10,
          height: height + 10,
          opacity: 0.1,
          x: x - 5,
          y: y - 5,
        },
        {
          duration: 3000,
          easing: "easeCubic",
          delay: 2000,
          repeat: true, // repeat
        }
      ); // 3s delay
    },
  },
  "rect"
);
}
//弹窗特有节点注册
export function dialogRegister(){
   //注册iconfont节点
   G6.registerNode("iconfontCpe", {
    draw(cfg, group) {
      const { style, labelCfg: labelStyle } = cfg;
      //添加图标
      const keyShape = group.addShape("text", {
        attrs: {
          x: 0,
          y: 0,
          fontFamily: "iconfont",
          textAlign: "center",
          textBaseline: "middle",
          text: cfg.text,
          fontSize: cfg.size,
          ...style,
        },
        name: "cpe-shape",
      });
      //添加label
      group.addShape("text", {
        attrs: {
          x: 0,
          y: 10,
          textAlign: "center",
          text: cfg.label,
          ...labelStyle.style,
        },
        name: "cpe-label",
      });
  
      return keyShape;
    },
    afterDraw(cfg, group) {
      const shape = group.get('children')[0];
      shape.animate(
        (ratio) => {
          let text = '\ue604'
          if(ratio > 0.6){
            text = '\ue604'
          }else if(ratio > 0.3){
            text = '\ue606'
          }else {
            text = '\ue605'
          }
          return {
            text,
          };
        },
        {
          repeat: true,
          duration: 1500,
          delay: 3000,
          // easing: 'easeCubic',
        },
      );
    },
  });
  //注册虚线动画
  // G6.registerEdge("vpn-line-dash",
  //   {
  //     afterDraw(cfg, group) {
  //       const shape = group.get("children")[0];
  //       let index = 0;
  //       shape.animate(
  //         () => {
  //           index = index+0.2;
  //           if (index > 9) {
  //             index = 0;
  //           }
  //           const res = {
  //             lineDash: [4, 4],
  //             lineDashOffset: -index,
  //           };
  //           return res;
  //         },
  //         {
  //           repeat: true,
  //           duration:10000,
  //         }
  //       );
  //     },
  //   },
  //   "line"
  // );
}

//网络拓扑总览特有节点注册
export function viewRegister(){
  //注册iconfont combos
  // G6.registerCombo("cloudCombo",
  //   {
  //     drawShape: function drawShape(cfg, group) {
  //       // const {  labelCfg: labelStyle   } = cfg;
  //       const keyShape = group.addShape("text", { 
  //         attrs: {
  //           y: 0,
  //           x: 0,
  //           fill: cfg.style.fill,
  //           stroke: cfg.style.fill,
  //           fontFamily: "iconfont",
  //           textAlign: "center",
  //           textBaseline: "middle",
  //           text: "\ue603",
  //           fontSize: 320,
  //           zIndex: 8,
  //         },
  //         name: "cloud",
  //       });
  //           //添加label
  //     // group.addShape("text", {
  //     //   attrs: {
  //     //     x: 0,
  //     //     y: -80,
  //     //     textAlign: "center",
  //     //     textBaseline: "middle",
  //     //     text: cfg.label,
  //     //     ...labelStyle.style,
  //     //   },
  //     //   name: "hubCombo-label",
  //     // });
  //       return keyShape;
  //     },
  //   },
  //   "cicle"
  // );
    //注册SVG combo
  G6.registerCombo(
      "cloudCombo",
      {
        drawShape: function drawShape(cfg, group) {
          const { labelCfg  } = cfg;
          let str = 'M 448 102.875 c 0 -82.09 -56.678 -150.9 -132.996 -169.48 C 311.762 -195.305 206.546 -298.667 77.142 -298.667 c -75.792 0 -143.266 35.494 -186.854 90.732 c -24.442 -31.598 -62.69 -51.96 -105.708 -51.96 c -73.81 0 -133.642 59.874 -133.642 133.722 c 0 6.436 0.48 12.76 1.364 18.954 c -11.222 -2.024 -22.766 -3.138 -34.57 -3.138 C -489.266 -110.359 -576 -23.5707 -576 83.4853 C -576 190.547 -489.266 277.333 -382.27 277.333 l 656.262 0 l 0 -0.012 C 370.13 277.137 448 199.109 448 102.875 Z'
            const pathArr =str.split(' ');
            let opath = []
            pathArr.forEach(item => {
              if(/[a-zA-Z]/.test(item)){
              opath.push([item])
            }else {
              opath[opath.length - 1].push(parseFloat(item))
            }
            });

          opath.forEach(item => {
            item.forEach((p,i) => {
              if (i > 0) {
                item [i] = item[i] / 3  ;
              }
            });
          });
          const keyShape = group.addShape("path", {
            attrs: {
              ...cfg.style,
              width: cfg.style.width,
              height: cfg.style.height,
              path:  opath,
            },
            id: cfg.id,
            name: "cloud",
          });
          group.addShape("text", {
            attrs: {
              x: 0,
              y:  -100,
              textAlign: "center",
              text: cfg.label,
              fill: '#303133',
            },
            name: "hubCombo-label",
          });
          return keyShape;
        },
        
      },
      "single-combo"
    );
   
}

 //节点文本溢出省略处理
 export function fittingString(str, maxWidth, fontSize){
  const ellipsis = '...';
  const ellipsisLength = G6.Util.getTextSize(ellipsis, fontSize)[0];
  let currentWidth = 0;
  let res = str;
  const pattern = new RegExp('[\u4E00-\u9FA5]+');  
  str.split('').forEach((letter, i) => {
    if (currentWidth > maxWidth - ellipsisLength) return;
    if (pattern.test(letter)) {
      currentWidth += fontSize;
    } else {
      currentWidth += G6.Util.getLetterWidth(letter, fontSize);
    }
    if (currentWidth > maxWidth - ellipsisLength) {
      res = `${str.substr(0, i)}${ellipsis}`;
    }
  });
  return res;
} 
```

