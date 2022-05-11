
import React, { useState, useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from './action'
import Card from '../../components/Card'

function Product(props) {
    const {product} = props.state.product
    useEffect(() => {
        props.actions.setProduct()
      }, []);
      console.log(props.state);
    return (
        <div className="user">
            {
                product? product.map((product, index)=><Card key={index} data={product} />):'loading'
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state: {
            ...state
        }
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Product);
