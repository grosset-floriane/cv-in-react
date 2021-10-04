import styled from 'styled-components';

const Button = styled.button`
        padding: .7rem;
        border: 1px #555 solid;
        border-radius: 5px;
        margin: .2rem .5rem 0 0;
        cursor: pointer;
        background-color: white;

        &.active {
            background-color: #555;
            color: white;
        }
    `;

export default Button;