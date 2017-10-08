"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListElement = function (_React$Component) {
    _inherits(ListElement, _React$Component);

    function ListElement(props) {
        _classCallCheck(this, ListElement);

        var _this = _possibleConstructorReturn(this, (ListElement.__proto__ || Object.getPrototypeOf(ListElement)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ListElement, [{
        key: "selectValue",
        value: function selectValue() {
            this.props.callBackFn(this.props.value);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("li", { key: this.props.id, onClick: this.selectValue.bind(this) }, this.props.value);
        }
    }]);

    return ListElement;
}(React.Component);

var Typeahead = function (_React$Component2) {
    _inherits(Typeahead, _React$Component2);

    function Typeahead(props) {
        _classCallCheck(this, Typeahead);

        var _this2 = _possibleConstructorReturn(this, (Typeahead.__proto__ || Object.getPrototypeOf(Typeahead)).call(this, props));

        _this2.state = {
            selectedValue: "",
            searchList: [{ cityName: "Bangalore" }, { cityName: "Chennai" }, { cityName: "Hyderabad" }, { cityName: "Pune" }],
            filteredListDom: []

        };
        return _this2;
    }

    _createClass(Typeahead, [{
        key: "updateSelValue",
        value: function updateSelValue(evt) {
            this.setState({ selectedValue: evt.target.value });
            if (evt.target.value == "") {
                this.setState({ filteredListDom: [] });
            } else {
                this.filterList();
            }
        }
    }, {
        key: "valueSelected",
        value: function valueSelected(value) {
            this.setState({ selectedValue: value, filteredListDom: [] });
        }
    }, {
        key: "filterList",
        value: function filterList() {
            var filteredListDom = this.state.searchList.filter(function (arrayObj) {
                if (arrayObj.cityName.indexOf(this.state.selectedValue) != -1) {
                    return true;
                } else {
                    return false;
                }
            }.bind(this)).map(function (arrayObj, index) {
                return React.createElement(ListElement, { callBackFn: this.valueSelected.bind(this), value: arrayObj.cityName, key: index });
            }.bind(this));
            this.setState({ filteredListDom: filteredListDom });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement("div", { className: "typeahead-container" }, React.createElement("input", { type: "text", value: this.state.selectedValue, onChange: this.updateSelValue.bind(this) }), React.createElement("ul", null, this.state.filteredListDom));
        }
    }]);

    return Typeahead;
}(React.Component);

ReactDOM.render(React.createElement(Typeahead, null), document.getElementById("main"));