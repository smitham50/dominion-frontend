import React, { useEffect } from 'react';
import Card from '../components/card';
import { connect } from 'react-redux';
import axios from 'axios';

const SupplyCards = (props) => {

    useEffect(() => {
        axios.get('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
            .then(resp => {
                const cards = resp.data;
                props.setCoppers(cards.filter(card => {
                    return card.name === "Copper";
                }));
                props.setSilvers(cards.filter(card => {
                    return card.name === "Silver";
                }));
                props.setGolds(cards.filter(card => {
                    return card.name === "Gold";
                }));
                props.setEstates(cards.filter(card => {
                    return card.name === "Estate";
                }));
                props.setDuchys(cards.filter(card => {
                    return card.name === "Duchy";
                }));
                props.setProvinces(cards.filter(card => {
                    return card.name === "Province";
                }));
                props.setCellars(cards.filter(card => {
                    return card.name === "Cellar";
                }));
                props.setMoats(cards.filter(card => {
                    return card.name === "Moat";
                }));
                props.setWorkshops(cards.filter(card => {
                    return card.name === "Workshop";
                }));
                props.setWoodcutters(cards.filter(card => {
                    return card.name === "Woodcutter";
                }));
                props.setVillages(cards.filter(card => {
                    return card.name === "Village";
                }));
                props.setMilitias(cards.filter(card => {
                    return card.name === "Militia";
                }));
                props.setSmithys(cards.filter(card => {
                    return card.name === "Smithy";
                }));
                props.setRemodels(cards.filter(card => {
                    return card.name === "Remodel";
                }));
                props.setMarkets(cards.filter(card => {
                    return card.name === "Market";
                }));
                props.setMines(cards.filter(card => {
                    return card.name === "Mine";
                }));
            });
    }, []);

    const renderCoppers = () => {
        return props.coppers.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderSilvers = () => {
        return props.silvers.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderGolds = () => {
        return props.golds.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderEstates = () => {
        return props.estates.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderDuchys = () => {
        return props.duchys.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderProvinces = () => {
        return props.provinces.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderCellars = () => {
        return props.cellars.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMoats = () => {
        return props.moats.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderWorkshops = () => {
        return props.workshops.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderWoodcutters = () => {
        return props.woodcutters.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderVillages = () => {
        return props.villages.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderSmithys = () => {
        return props.smithys.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMilitias = () => {
        return props.militias.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderRemodels = () => {
        return props.remodels.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMarkets = () => {
        return props.markets.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    const renderMines = () => {
        return props.mines.map((card, index) => {
            return <Card key={card.id} card={card} index={index} className="supply-card" />
        });
    };

    return (
        <div id="supply-card-container">
            <div id="coppers" className="card-container">
                {renderCoppers()}
            </div>
            <div id="silvers" className="card-container">
                {renderSilvers()}
            </div>
            <div id="golds" className="card-container">
                {renderGolds()}
            </div>
            <div id="cellars" className="card-container">
                {renderCellars()}
            </div>
            <div id="moats" className="card-container">
                {renderMoats()}
            </div>
            <div id="workshops" className="card-container">
                {renderWorkshops()}
            </div>
            <div id="woodcutters" className="card-container">
                {renderWoodcutters()}
            </div>
            <div id="villages" className="card-container">
                {renderVillages()}
            </div>
            <div id="estates" className="card-container">
                {renderEstates()}
            </div>
            <div id="duchys" className="card-container">
                {renderDuchys()}
            </div>
            <div id="provinces" className="card-container">
                {renderProvinces()}
            </div>
            <div id="smithys" className="card-container">
                {renderSmithys()}
            </div>
            <div id="militias" className="card-container">
                {renderMilitias()}
            </div>
            <div id="remodels" className="card-container">
                {renderRemodels()}
            </div>
            <div id="markets" className="card-container">
                {renderMarkets()}
            </div>
            <div id="mines" className="card-container">
                {renderMines()}
            </div>
        </div>
    );
};

// class SupplyCards extends React.Component {

//     componentDidMount() {
//         fetch('https://blooming-sierra-89816.herokuapp.com/api/v1/cards')
//             .then(resp => resp.json())
//             .then(cards => {
//                 this.props.setCoppers(cards.filter(card => {
//                     return card.name === "Copper"
//                 }))
//                 this.props.setSilvers(cards.filter(card => {
//                     return card.name === "Silver"
//                 }))
//                 this.props.setGolds(cards.filter(card => {
//                     return card.name === "Gold"
//                 }))
//                 this.props.setEstates(cards.filter(card => {
//                     return card.name === "Estate"
//                 }))
//                 this.props.setDuchys(cards.filter(card => {
//                     return card.name === "Duchy"
//                 }))
//                 this.props.setProvinces(cards.filter(card => {
//                     return card.name === "Province"
//                 }))
//                 this.props.setCellars(cards.filter(card => {
//                     return card.name === "Cellar"
//                 }))
//                 this.props.setMoats(cards.filter(card => {
//                     return card.name === "Moat"
//                 }))
//                 this.props.setWorkshops(cards.filter(card => {
//                     return card.name === "Workshop"
//                 }))
//                 this.props.setWoodcutters(cards.filter(card => {
//                     return card.name === "Woodcutter"
//                 }))
//                 this.props.setVillages(cards.filter(card => {
//                     return card.name === "Village"
//                 }))
//                 this.props.setMilitias(cards.filter(card => {
//                     return card.name === "Militia"
//                 }))
//                 this.props.setSmithys(cards.filter(card => {
//                     return card.name === "Smithy"
//                 }))
//                 this.props.setRemodels(cards.filter(card => {
//                     return card.name === "Remodel"
//                 }))
//                 this.props.setMarkets(cards.filter(card => {
//                     return card.name === "Market"
//                 }))
//                 this.props.setMines(cards.filter(card => {
//                     return card.name === "Mine"
//                 }))
//             })
//     }

//     renderCoppers = () => {
//         return this.props.coppers.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderSilvers = () => {
//         return this.props.silvers.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderGolds = () => {
//         return this.props.golds.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderEstates = () => {
//         return this.props.estates.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderDuchys = () => {
//         return this.props.duchys.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderProvinces = () => {
//         return this.props.provinces.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderCellars = () => {
//         return this.props.cellars.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderMoats = () => {
//         return this.props.moats.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderWorkshops = () => {
//         return this.props.workshops.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderWoodcutters = () => {
//         return this.props.woodcutters.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderVillages = () => {
//         return this.props.villages.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderSmithys = () => {
//         return this.props.smithys.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderMilitias = () => {
//         return this.props.militias.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderRemodels = () => {
//         return this.props.remodels.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderMarkets = () => {
//         return this.props.markets.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     renderMines = () => {
//         return this.props.mines.map((card, index) => {
//             return <Card key={card.id} card={card} index={index} className="supply-card" />
//         })
//     }

//     render() {
//         return (
//             <div id="supply-card-container">
//                 <div id="coppers" className="card-container">
//                     {this.renderCoppers()}
//                 </div>
//                 <div id="silvers" className="card-container">
//                     {this.renderSilvers()}
//                 </div>
//                 <div id="golds" className="card-container">
//                     {this.renderGolds()}
//                 </div>
//                 <div id="cellars" className="card-container">
//                     {this.renderCellars()}
//                 </div>
//                 <div id="moats" className="card-container">
//                     {this.renderMoats()}
//                 </div>
//                 <div id="workshops" className="card-container">
//                     {this.renderWorkshops()}
//                 </div>
//                 <div id="woodcutters" className="card-container">
//                     {this.renderWoodcutters()}
//                 </div>
//                 <div id="villages" className="card-container">
//                     {this.renderVillages()}
//                 </div>
//                 <div id="estates" className="card-container">
//                     {this.renderEstates()}
//                 </div>
//                 <div id="duchys" className="card-container">
//                     {this.renderDuchys()}
//                 </div>
//                 <div id="provinces" className="card-container">
//                     {this.renderProvinces()}
//                 </div>
//                 <div id="smithys" className="card-container">
//                     {this.renderSmithys()}
//                 </div>
//                 <div id="militias" className="card-container">
//                     {this.renderMilitias()}
//                 </div>
//                 <div id="remodels" className="card-container">
//                     {this.renderRemodels()}
//                 </div>
//                 <div id="markets" className="card-container">
//                     {this.renderMarkets()}
//                 </div>
//                 <div id="mines" className="card-container">
//                     {this.renderMines()}
//                 </div>
//             </div>
//         )
//     }
// }

function msp(state) {

    const { 
        coppers, silvers, golds, estates, duchys, provinces, cellars, 
        moats, workshops, woodcutters, villages, militias, smithys, 
        remodels, markets, mines 
    } = state.supply

    return {
        coppers,
        silvers,
        golds,
        estates,
        duchys,
        provinces,
        cellars,
        moats,
        workshops,
        woodcutters,
        villages,
        militias,
        smithys,
        remodels,
        markets,
        mines
    }

}

function mdp(dispatch) {
    return {
        setCoppers: (coppers) => {
            dispatch({ type: "COPPERS", payload: coppers })
        },
        setSilvers: (silvers) => {
            dispatch({ type: "SILVERS", payload: silvers })
        },
        setGolds: (golds) => {
            dispatch({ type: "GOLDS", payload: golds })
        },
        setEstates: (estates) => {
            dispatch({ type: "ESTATES", payload: estates })
        },
        setDuchys: (duchys) => {
            dispatch({ type: "DUCHYS", payload: duchys })
        },
        setProvinces: (provinces) => {
            dispatch({ type: "PROVINCES", payload: provinces })
        },
        setCellars: (cellars) => {
            dispatch({ type: "CELLARS", payload: cellars })
        },
        setMoats: (moats) => {
            dispatch({ type: "MOATS", payload: moats })
        },
        setWorkshops: (workshops) => {
            dispatch({ type: "WORKSHOPS", payload: workshops })
        },
        setWoodcutters: (woodcutters) => {
            dispatch({ type: "WOODCUTTERS", payload: woodcutters })
        },
        setVillages: (villages) => {
            dispatch({ type: "VILLAGES", payload: villages })
        },
        setMilitias: (militias) => {
            dispatch({ type: "MILITIAS", payload: militias })
        },
        setSmithys: (smithys) => {
            dispatch({ type: "SMITHYS", payload: smithys })
        },
        setRemodels: (remodels) => {
            dispatch({ type: "REMODELS", payload: remodels })
        },
        setMarkets: (markets) => {
            dispatch({ type: "MARKETS", payload: markets })
        },
        setMines: (mines) => {
            dispatch({ type: "MINES", payload: mines })
        }
    }
}

export default connect(msp, mdp)(SupplyCards) 