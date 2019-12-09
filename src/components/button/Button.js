import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    -webkit-appearance: none;
    border-style: none;
    min-height: 40px;
    border-radius: 5px;
    background: ${props => props.primary ?
        "linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%))" : "#fff"
    };
    color: ${props => props.primary ?
        "#fff" : "hsl(237, 63%, 64%)"
    };
    text-transform : uppercase;
    font-weight: 700;
    font-size: 0.8em;
    letter-spacing: 2px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);


    &:hover{
        background: transparent;
        color: ${props => props.primary ? 
            "hsl(237, 63%, 64%)" : "#fff"
        };

        border: 1px solid ${props => props.primary ? 
            "hsl(237, 63%, 64%)" : "#fff"
        };
    }

`