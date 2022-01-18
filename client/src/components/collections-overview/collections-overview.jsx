import React from "react";
import { useSelector } from "react-redux";

import CollectionPreview from '../collection-preview/collection-preview';

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { CollectionOverviewContainer } from "./collection-overview.styles";

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <CollectionOverviewContainer>
            {collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))}
        </CollectionOverviewContainer>
    );
};

export default CollectionsOverview;