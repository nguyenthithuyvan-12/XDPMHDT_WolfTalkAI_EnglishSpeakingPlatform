import React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'dotlottie-wc': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                src?: string;
                speed?: string;
                mode?: string;
                loop?: boolean;
                autoplay?: boolean;
            };
        }
    }
}
