import React from 'react';
import { Button } from '../button/Button';
import { Table } from '../table/Table';
import './price-table.css';

export const PriceTable = ({title, currency, price, buttonText, primary, children}) => {
    return(
        <Table className="table" primary={primary}>
            <span className="title">{title}</span>
            <div className="price-container">
                <span className="currency">{currency}</span>
                <span className="price">{price}</span>
            </div>
            {children}
            <Button type="button" primary={!primary}>{buttonText}</Button>
        </Table>
    )
}