import styled from 'styled-components';

export const Table = styled.div`
    text-align: center;
    min-width: 300px;
    background: ${props => props.primary ? "hsl(237, 63%, 64%)" : "#fff"};
    color:${props => props.primary && "#fff"};
    border-radius: 10px;
    padding: 2em;
    margin-bottom: 2em;
    margin-top: 2em;
    box-shadow: 0px 5px 3px rgb(0,0,0,0.2);
`