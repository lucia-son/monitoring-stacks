"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[53],{10529:(F,d,i)=>{i.r(d),i.d(d,{plugin:()=>C});var p=i(36873),u=i(3947),l=i(23054),h=i(28528),r=i(66111),m=i(43752),c=i(28265),n=i(25532);class f extends r.Component{constructor(e){super(e),this.initElement=t=>(this.element=new c.f(l.e,t.options.root),this.updateSize(t),this.element.updateData(this.dims),this.element),this.updateSize=t=>{const{width:o,height:a}=t;this.element.options.constraint={vertical:m.fJ.Top,horizontal:m._5.Left},this.element.options.placement={left:0,top:0,width:o,height:a}},this.dims={getColor:t=>(0,n.getColorDimensionFromData)(this.props.data,t),getScale:t=>(0,n.getScaleDimensionFromData)(this.props.data,t),getScalar:t=>(0,n.getScalarDimensionFromData)(this.props.data,t),getText:t=>(0,n.getTextDimensionFromData)(this.props.data,t),getResource:t=>(0,n.getResourceDimensionFromData)(this.props.data,t),getPanelData:()=>this.props.data},this.element=this.initElement(e)}shouldComponentUpdate(e){const{width:t,height:o,data:a}=this.props;let s=!1;return(t!==e.width||o!==e.height)&&(this.updateSize(e),s=!0),a!==e.data&&(this.element.updateData(this.dims),s=!0),this.props.options?.root!==e.options?.root&&(this.initElement(e),s=!0),s}render(){const{width:e,height:t}=this.props;return r.createElement("div",{style:{width:e,height:t,overflow:"hidden",position:"relative"}},this.element.render())}}var v=i(40538);const D={root:{config:{path:{mode:v.Q8.Fixed,fixed:"img/icons/unicons/analysis.svg"},fill:{fixed:"green"}}}},C=new p.c(f).setNoPadding().useFieldConfig({standardOptions:{[u.qb.Mappings]:{settings:{icon:!0}}}}).setPanelOptions(g=>{g.addNestedOptions({category:["Icon"],path:"root",build:(e,t)=>{l.e.registerOptionsUI(e,t),h.I.addBackground(e,t),h.I.addBorder(e,t)},defaultValue:D.root})})}}]);

//# sourceMappingURL=iconPanel.99ffd4402e58974d5c17.js.map