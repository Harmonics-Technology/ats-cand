import { UserContext } from "@components/Context/UserContext";
import { GetServerSideProps } from "next";
import React, { useContext } from "react";

const index = () => {
    return <div>index</div>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { id } = ctx.query;
    return {
        redirect: {
            permanent: false,
            destination: `/jobs/1`,
        },
        props: {},
    };
};
