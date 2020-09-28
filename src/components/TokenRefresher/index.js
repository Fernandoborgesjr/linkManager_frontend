import { getToken } from "../../helpers/account";
import { getTokenExpire } from "../../helpers/jwt";
import { secondsToReadableTime } from "../../helpers/dateTime";
import { connect } from "react-redux";
import { getFreshToken } from "../../actions/AccountActions";
import { useEffect } from "react";


const TokenRefresher = ({ getFreshToken }) => {

    const TRESHOLD = 30;
    const calculate = () => {
        const token = getToken();
        if (!token) return {};
        const expires = getTokenExpire(token);
        const secondsToExpire = expires - Date.now() / 1000;
        return secondsToExpire;
    }
    useEffect(() => {
        const secondsToExpire = calculate() - TRESHOLD;
        const readableTime = secondsToReadableTime(secondsToExpire);
        //console.log("*** token refresh", readableTime);
        const id = setTimeout(getFreshToken, secondsToExpire * 1000);
        return () => clearTimeout(id);
    }, [getFreshToken]);

    return null;
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);