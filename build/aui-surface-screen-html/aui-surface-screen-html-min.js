YUI.add("aui-surface-screen-html",function(e,t){e.HTMLScreen=e.Base.create("htmlScreen",e.Screen,[],{_request:null,abortRequest:function(){this._request&&this._request.abort()},getSurfaceContent:function(e,t){var n=t.one("#"+e);if(n)return n.getHTML()},load:function(t){var n=this.getCache(),r;return e.Lang.isValue(n)?e.CancellablePromise.resolve(n):(r=new e.Url(t),r.addParameters(this.get("urlParams")),this.loadContent(r.toString()))},loadContent:function(t){var n=this,r;return n.abortRequest(),r=new e.CancellablePromise(function(i){var s={headers:{"X-PJAX":"true"},method:n.get("method"),on:{failure:function(e,t){r.cancel(t.responseText)},success:function(t,r){var s=e.Node.create("<div/>");s.append(r.responseText),n._setScreenTitleFromFragment(s),n.addCache(s),i(s)}},timeout:n.get("timeout")};if(e.UA.edge||e.UA.ie)s.cache=!1;n._request=e.io(t,s)},function(){n.abortRequest()}),r},_setUrlParams:function(t){var n=t;return e.Lang.isString(t)&&(n={},n[t]=1),n},_setScreenTitleFromFragment:function(e){var t=e.one(this.get("titleSelector"));t&&this.set("title",t.get("text"))},_validateUrlParams:function(t){return e.Lang.isString(t)||e.Lang.isObject(t)}},{ATTRS:{cacheable:{value:!0},method:{validator:e.Lang.isString,value:"GET"},titleSelector:{value:"title"},timeout:{value:3e4},urlParams:{setter:"_setUrlParams",validator:"_validateUrlParams",value:"pjax"}}})},"3.0.3-deprecated.75",{requires:["aui-base","aui-io-request","aui-promise","aui-surface-screen","aui-url"]});
