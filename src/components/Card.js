import  React from 'react';

const Card = ({content, cardName}) => {

    return (
        <div className="card card-type-asset user-card">
            <div className="aspect-ratio card-info card-item-first">
                    {cardName}
            </div>
            <div className="card-body">
                <div className="card-row">
                    <div className="autofit-col autofit-col-expand">
                        <section className="autofit-section">
                            <div className="card-time" title="User Name">
                                {content}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
    };

export default Card;