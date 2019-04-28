import React from "react"
import { Menu, Icon, Button, Modal } from 'antd';
import "./style/index"
import axios from "axios";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Row, Col } from 'antd';
import createG2 from 'g2-react';
import { Stat } from 'g2';
import G2 from "components/g2"
const Line = createG2(chart => {
    chart.line().position('year*value');
    chart.point().position('year*value').size(4).shape('circle').style({
        stroke: '#fff',
        lineWidth: 1
    });
    chart.render();
});

const Pie = createG2(chart => {
    chart.coord('theta', {
        innerRadius: 0.5,
    });
    chart.tooltip({
        showTitle: false
    });
    chart.intervalStack().position('value').color('type');

    chart.render();
})
export default class IndexPage extends React.Component {

    state = {
        visible: false,
        data: [{
            year: '1991',
            value: 3
        }, {
            year: '1992',
            value: 4
        }, {
            year: '1993',
            value: 3.5
        }, {
            year: '1994',
            value: 5
        }, {
            year: '1995',
            value: 4.9
        }, {
            year: '1996',
            value: 6
        }, {
            year: '1997',
            value: 7
        }, {
            year: '1998',
            value: 9
        }, {
            year: '1999',
            value: 13
        }],
        forceFit: true,
        height: 255,
        pieData: [{
            type: '分类一',
            value: 20
        }, {
            type: '分类二',
            value: 18
        }, {
            type: '分类三',
            value: 32
        }, {
            type: '分类四',
            value: 15
        }, {
            type: 'Other',
            value: 15
        }]
    }

    toggle = () => {
        this.setState({
            data: [{
                year: '1991',
                value: 10
            }, {
                year: '1992',
                value: 4
            }, {
                year: '1993',
                value: 35
            }, {
                year: '1994',
                value: 50
            }, {
                year: '1995',
                value: 1
            }, {
                year: '1996',
                value: 6
            }, {
                year: '1997',
                value: 7
            }, {
                year: '1998',
                value: 20
            }, {
                year: '1999',
                value: 13
            }]
        })
    }

    componentDidMount() {
        var data = [{
            type: '分类一',
            value: 20
        }, {
            type: '分类二',
            value: 18
        }, {
            type: '分类三',
            value: 32
        }, {
            type: '分类四',
            value: 15
        }, {
            type: 'Other',
            value: 15
        }];

        // 可以通过调整这个数值控制分割空白处的间距，0-1 之间的数值
        var sliceNumber = 0.01;

        // 自定义 other 的图形，增加两条线
        G2.Shape.registerShape('interval', 'sliceShape', {
            draw: function draw(cfg, container) {
                var points = cfg.points;
                var path = [];
                path.push(['M', points[0].x, points[0].y]);
                path.push(['L', points[1].x, points[1].y - sliceNumber]);
                path.push(['L', points[2].x, points[2].y - sliceNumber]);
                path.push(['L', points[3].x, points[3].y]);
                path.push('Z');
                path = this.parsePath(path);
                return container.addShape('path', {
                    attrs: {
                        fill: cfg.color,
                        path: path
                    }
                });
            }
        });

        var chart = new G2.Chart({
            container: this.chart,
            forceFit: true,
            height: 255
        });

        chart.source(data);
        chart.coord('theta', {
            innerRadius: 0.75
        });
        chart.tooltip({
            showTitle: false
        });
        chart.intervalStack().position('value').color('type').shape('sliceShape');

        chart.render();
    }

    render() {
        return <div>
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>
                    <div className="gutter-box z-chart-block">
                        <Line
                            data={this.state.data}
                            forceFit={true}
                            height={this.state.height}
                            ref="myChart"
                        />
                    </div>
                </Col>
                <Col className="gutter-row" span={12}>
                    <div className="gutter-box z-chart-block" ref={e => this.chart = e}>

                    </div>
                </Col>

            </Row>
            <Button onClick={this.toggle}>切换数据</Button>
        </div>
    }
}