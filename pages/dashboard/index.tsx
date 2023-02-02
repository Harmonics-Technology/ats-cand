import { withPageAuth } from "@components/Bits/WithPageAuth";
import { UserContext } from "@components/Context/UserContext";
import { Dashboard } from "@components/Sections/Dashboard";
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import data from "../../src/components/data.json";

const dashboard = () => {
    // console.log({ user });
    const { setUser } = useContext(UserContext);
    const router = useRouter();
    const id = router.query.id;
    const result = data.filter((x) => x.id === Number(id))[0];

    if (result !== undefined) {
        setUser(result);
        Cookies.set("user", JSON.stringify(result));
    }
    return <Dashboard user={result} />;
};

export default dashboard;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const { id } = ctx.query;
//     const result = data.filter((x) => x.id === Number(id))[0];
//     return {
//         props: {
//             result,
//             id,
//         },
//     };
// };

// export const getServerSideProps: GetServerSideProps = withPageAuth(async () => {
//     try {
//         const data = await DashboardService.getAdminMetrics();
//         // console.log({ data });
//         return {
//             props: {
//                 metrics: data,
//             },
//         };
//     } catch (error: any) {
//         return {
//             props: {
//                 data: [],
//             },
//         };
//     }
// });
