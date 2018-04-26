if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-diagram-node-join/aui-diagram-node-join.js']) {
   __coverage__['build/aui-diagram-node-join/aui-diagram-node-join.js'] = {"path":"build/aui-diagram-node-join/aui-diagram-node-join.js","s":{"1":0,"2":0,"3":0},"b":{},"f":{"1":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":33},"end":{"line":1,"column":52}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":88,"column":68}},"2":{"start":{"line":12,"column":0},"end":{"line":83,"column":3}},"3":{"start":{"line":85,"column":0},"end":{"line":85,"column":36}}},"branchMap":{},"code":["(function () { YUI.add('aui-diagram-node-join', function (A, NAME) {","","/**"," * A base class for DiagramNodeJoin."," *"," * @class A.DiagramNodeJoin"," * @extends A.DiagramNodeState"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var DiagramNodeJoin = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'diagram-node',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.DiagramNodeJoin`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * The height of the node.","         *","         * @attribute height","         * @default 60","         * @type Number","         */","        height: {","            value: 60","        },","","        /**","         * The type of the node.","         *","         * @attribute type","         * @default 'join'","         * @type String","         */","        type: {","            value: 'join'","        },","","        /**","         * The width of the node.","         *","         * @attribute width","         * @default 60","         * @type Number","         */","        width: {","            value: 60","        }","    },","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type String","     * @static","     */","    EXTENDS: A.DiagramNodeState,","","    prototype: {","        hotPoints: A.DiagramNode.DIAMOND_POINTS,","","        renderShapeBoundary: A.DiagramNodeCondition.prototype.renderShapeBoundary,","","        _valueShapeBoundary: A.DiagramNode.prototype._valueShapeBoundary","    }","});","","A.DiagramNodeJoin = DiagramNodeJoin;","","","}, '3.0.3-deprecated.75', {\"requires\": [\"aui-diagram-node-state\"]});","","}());"]};
}
var __cov_PAxF7lW5BE7TC8qPas_haA = __coverage__['build/aui-diagram-node-join/aui-diagram-node-join.js'];
__cov_PAxF7lW5BE7TC8qPas_haA.s['1']++;YUI.add('aui-diagram-node-join',function(A,NAME){__cov_PAxF7lW5BE7TC8qPas_haA.f['1']++;__cov_PAxF7lW5BE7TC8qPas_haA.s['2']++;var DiagramNodeJoin=A.Component.create({NAME:'diagram-node',ATTRS:{height:{value:60},type:{value:'join'},width:{value:60}},EXTENDS:A.DiagramNodeState,prototype:{hotPoints:A.DiagramNode.DIAMOND_POINTS,renderShapeBoundary:A.DiagramNodeCondition.prototype.renderShapeBoundary,_valueShapeBoundary:A.DiagramNode.prototype._valueShapeBoundary}});__cov_PAxF7lW5BE7TC8qPas_haA.s['3']++;A.DiagramNodeJoin=DiagramNodeJoin;},'3.0.3-deprecated.75',{'requires':['aui-diagram-node-state']});
