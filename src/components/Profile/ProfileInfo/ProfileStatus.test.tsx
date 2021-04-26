import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />)
        const instane = component.getInstance();
        expect(instane.state.status).toBe("it-kamasutra.com");
    });

    test("after creation <input /> with status shouldn't be displayed", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />)
        const root = component.root;
        
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status = "it-kamasutra.com" />)
        const root = component.root;

        let span = root.findByType("span");
        span.props.onDoubleClick();
        
        let input = root.findByType("input");
        expect(input.props.value).toBe("it-kamasutra.com");
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status = "it-kamasutra.com" updateStatus = { mockCallback }/>)
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);

    });
});
