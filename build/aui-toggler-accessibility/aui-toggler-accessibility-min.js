YUI.add("aui-toggler-accessibility",function(e,t){function n(){}n.prototype={initializer:function(){this._eventHandles.push(e.after(this._afterToggle,this,"toggle")),this._setARIAElements()},_afterToggle:function(t){var n=this.get("content"),r=this.get("header");e.Lang.isUndefined(t)&&(t=this.get("expanded")),r.setAttribute("aria-pressed",t),n.setAttribute("aria-hidden",!t)},_setARIAElements:function(){var e=this.get("content"),t=e.attr("id")||e.guid(),n=this.get("expanded"),r=this.get("header");r.setAttribute("aria-controls",t),r.setAttribute("aria-pressed",n),e.setAttribute("aria-hidden",!n)}},e.Base.mix(e.Toggler,[n])},"3.0.3-deprecated.59",{requires:["aui-toggler-base"]});