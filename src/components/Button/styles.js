import styled, { keyframes } from 'styled-components'
import Colors from '../Colors'

const buttonLoadingAnimation = keyframes`
    to {
        transform: rotate(360deg)
    }
`
const generateButtonColor = color => `
    border: solid 1px;
    border-color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.8);
    background-color: rgb(${Colors[color].r},${Colors[color].g},${Colors[color].b});
    color: ${Colors[color === "Pink" ?  "White" : "Black"].hex};

    ${
        color === 'White' ? `
        color: rgb(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b});
        border-color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.8);
        :hover {
            background-color: ${Colors['Light-Blue'].hex};
            border: solid 1px ${Colors['Light-Blue'].hex};
            color: ${Colors["White"].hex};

        }

        :active {
            background-color: rgba(${Colors["Light-Blue"].r},${Colors["Light-Blue"].g},${Colors["Light-Blue"].b}, 0.5);
            border: solid 1px ${Colors[`${color}`].hex};
            color: ${Colors["White"].hex};
        }


        ` : `
        :hover {
            background-color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.7);
            border: solid 1px ${Colors[`${color}`].hex};
            color: ${Colors["White"].hex};
        }

        :active {
            background-color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.8);
            border: solid 1px ${Colors[`${color}`].hex};
            color: ${Colors["White"].hex};
        }
        `
    }
`
const generateDisabledButton = props => {
    let color= 'Light-Blue'

    switch ( true ) {
        case props.secondary:
        case props.pink:
            color= 'Pink'
            break
        case props.success:
            color= 'Green'
            break
        case props.white:
            color= 'White'
            break
        case props.danger:
        case props.yellow:
            color= 'Yellow'
            break
        default:
            color= 'Light-Blue'
    }

    return (`

    background: transparent;
    border: 1px solid ;
    border-color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.4);
    color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.4);

    :hover {
        background: transparent;
        color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.4);
        border: 1px solid ;
        border-color: rgba(${Colors[color].r},${Colors[color].g},${Colors[color].b}, 0.4);
        cursor: ${props.loading ? 'wait' : 'not-allowed'};
    }

`)
}

export default styled.a`
    display: inline-block;
    padding: 1.25rem 4rem;
    text-decoration: none;
    text-transform: uppercase;
    justify-content: center;

    white-space: nowrap;

    cursor: pointer;
    position: relative;
    background: transparent;

    text-align: center;


    ${({ xs }) => xs && `
        padding: 1em 3rem;
    `}

    ${({ sm }) => sm && `
        padding: 1em 3rem;
    `}

    ${({ md }) => md && `
        padding: 1em 3rem;
    `}

    ${({ lg }) => lg && `
        padding: 1em 3rem;
    `}

    ${({ full }) => full && `
        width: 100%;
    `}

    :before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10000px;
        border-radius: 50%;
        border: 1px solid ${Colors['Pink'].hex};
        border-top-color: ${Colors['Light-Blue'].hex};
        animation: ${buttonLoadingAnimation} .6s linear infinite;
        ${({ loading }) => loading && `
            margin-left: -10px;
        `}
      }

      ${({ primary }) => primary && `
        ${generateButtonColor('Light-Blue')}
      `}

      ${({ blue }) => blue && `
        ${generateButtonColor('Light-Blue')}
      `}

      ${({ danger }) => danger && `
        ${generateButtonColor('Yellow')}
      `}

      ${({ success }) => success && `
        ${generateButtonColor('Green')}
      `}

      ${({ secondary }) => secondary && `
        ${generateButtonColor('Pink')}
      `}

      ${({ pink }) => pink && `
        ${generateButtonColor('Pink')}
      `}

      ${({ yellow }) => yellow && `
        ${generateButtonColor('Yellow')}
      `}

      ${({ white }) => white && `
        ${generateButtonColor('White')}
      `}

      ${props  => props.disabled && `
        ${generateDisabledButton(props)}
      `}


`
