import * as S from './style';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faSpinner, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import { relative } from 'node:path';

const Icon = ({ state }) => {
    //style={{position: "relative", left: "-1px"}} is a hack to get icon centered in both app and storybook
    //TODO: find alternative solution to style{{}} attribute hack
    if (state == "pending")
        return <FontAwesomeIcon style={{ position: "relative", left: "-2px" }} pull="right" icon={faSpinner} spin />
    else if (state == "error")
        return <FontAwesomeIcon style={{ position: "relative", left: "-2px" }} pull="right" icon={faTimes} />
    else if (state == "success")
        return <FontAwesomeIcon style={{ position: "relative", left: "-2px" }} pull="right" icon={faCheck} />
    return <FontAwesomeIcon style={{ position: "relative", left: "-2px" }} pull="right" icon={faLongArrowAltRight} />
};

const TextInput = ({
    single = false,
    label = "",
    state = "",
    placeHolder = "",
}) => {
    if (single) {
        return (
            <S.InputWrapper>
                
                <S.TextInput type="text" placeholder={placeHolder} single state={state} />
                <S.InputIcon label={label} state={state} single>
                    <Icon state={state} />
                </S.InputIcon>
            </S.InputWrapper>
        );
    }
    else if (state != "" && state != "pending") {
        return (
            <S.InputWrapper>
                <S.TextInput type="text" label={label} placeholder={placeHolder} state={state} />
                <S.InputIcon>
                    <Icon state={state} />
                </S.InputIcon>
            </S.InputWrapper>
        )
    }
    else {
        return (
            <S.InputWrapper>
                <S.TextInput type="text" label={label} placeholder={placeHolder} state={state} />
            </S.InputWrapper>
        )
    }
};

export default TextInput
