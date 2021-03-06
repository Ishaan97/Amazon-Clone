import React from "react";
import {connect} from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component"

import "./collection.styles.css";

class CollectionPage extends React.Component {
    render()
    {
        const {collection} = this.props;
        const {title, items} = collection
        return (
            <div className="collection-page">
                <h2 className="title">{title}</h2>
                <div className="items-container">
                    <div className="items">
                        {
                            items.map(item => <CollectionItem key={item.id} item={item}/>)
                        }
                    </div>
                </div>
                
            </div>
            
        );
    }
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);