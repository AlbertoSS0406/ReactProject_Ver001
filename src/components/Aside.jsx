import React, { Fragment, useState } from 'react'
import { Collapse } from "react-collapse";
import { AsideList } from  "./AsideList"
import classNames from "classnames";

export function Aside() {
    class AsideCustom extends React.Component {
        
        constructor(props) {
            super(props);
            this.toggleClassShowHideData = this.toggleClassShowHideData.bind(this);
            this.state = {
                showList: 0
            };
        }

        toggleClassShowHideData(showBool, e) {
            this.setState({
                showList: this.state.showList === showBool ? 0 : 1
            });
        }

        updateTextoBtn(showBool) {
            if (this.state.showList === showBool) {
                return (
                    <span>
                        <i /> - Menos
                    </span>
                );
            } else {
                return (
                    <span>
                        <i /> + Más
                    </span>
                );
            }
        }

        render() {
            const { showList } = this.state;
            return (
                <aside>
                    <div className="col text-center">
                        <button
                            className="btn btn-outline-primary"
                            onClick={this.toggleClassShowHideData.bind(this, 1)}
                        >
                            {this.updateTextoBtn(1)}
                        </button>
                    </div>
                    <div class="align-baseline">
                        <Collapse isOpened={showList === 1}>
                            <div>
                                <AsideList></AsideList>
                            </div>
                        </Collapse>
                    </div>
                </aside>
            );
        }
    }

    return <AsideCustom></AsideCustom>;
}




