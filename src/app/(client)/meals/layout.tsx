import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'MealsLayout metadata'
}

type IProps = {children: React.ReactNode};

const MealsLayout = ({children}: IProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MealsLayout;