import React from 'react'

function FoodBoxDetails(props) {

  
    return (
        <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img alt="img" src={props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{props.name}</strong> <br />
                <small>{props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    )
}
export default FoodBoxDetails