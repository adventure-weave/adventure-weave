"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var storm_react_diagrams_1 = require("storm-react-diagrams");
var _ = require("lodash");
var SceneNodeModel = (function (_super) {
    __extends(SceneNodeModel, _super);
    function SceneNodeModel(name, content) {
        if (name === void 0) { name = 'Scene title'; }
        var _this = _super.call(this, 'story') || this;
        _this.name = name;
        if (content === undefined) {
            _this.content = "Placeholder content for **" + _this.name + "**";
        }
        return _this;
    }
    SceneNodeModel.prototype.deSerialize = function (object) {
        _super.prototype.deSerialize.call(this, object);
        this.content = object.content;
        this.name = object.name;
    };
    SceneNodeModel.prototype.serialize = function () {
        return _.merge(_super.prototype.serialize.call(this), {
            content: this.content,
            name: this.name
        });
    };
    return SceneNodeModel;
}(storm_react_diagrams_1.NodeModel));
exports.SceneNodeModel = SceneNodeModel;
var ChoicePortModel = (function (_super) {
    __extends(ChoicePortModel, _super);
    function ChoicePortModel(idx, name) {
        if (idx === void 0) { idx = 0; }
        var _this = this;
        name = name || "Choice #" + idx + " placeholder";
        _this = _super.call(this, name) || this;
        return _this;
    }
    return ChoicePortModel;
}(storm_react_diagrams_1.PortModel));
exports.ChoicePortModel = ChoicePortModel;
//# sourceMappingURL=models.js.map