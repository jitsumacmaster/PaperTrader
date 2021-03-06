import { connect } from 'react-redux';
import { 
    // requestAllStocks, 
    // requestStock, //quote
    requestStock5y,
    requestStock1y,
    requestStock3m,
    requestStock1m,
    requestStock5d,
    requestStock1d
 } from '../../actions/stock_actions';
import { requestCompany } from '../../actions/company_actions'
import { createWatchlist,
    deleteWatchlist
 } from '../../actions/watchlist_actions'
import { fetchUser } from '../../actions/session_actions'
import StockShow from './stock_show';

const msp = (state, ownProps) => {
    let stocks = {};
    Object.values(state.entities.all_stocks).forEach((stock)=>{
        stocks[stock.symbol] = stock;
    })
    // debugger
    // let watchlists = {};
    // state.session.watchlists.forEach(watchlist =>{
    //     watchlists[watchlist.symbol] = watchlist
    // })
    // console.log(state)
    return ({
        stock: state.entities.stock, 
        stocks: stocks, 
        company: state.entities.company,
        currentUser: state.session,
        watchlist: {user_id: state.session.id, symbol: ownProps.match.params.symbol },
        
        watchlists: state.session.watchlists,
        history: ownProps.history,
    })
}

const mdp = dispatch => ({
    // requestAllStocks: () => dispatch(requestAllStocks()),
    // requestStock: symbol => dispatch(requestStock(symbol)),
    requestStock5y: symbol => dispatch(requestStock5y(symbol)),
    requestStock1y: symbol => dispatch(requestStock1y(symbol)),
    requestStock3m: symbol => dispatch(requestStock3m(symbol)),
    requestStock1m: symbol => dispatch(requestStock1m(symbol)),
    requestStock5d: symbol => dispatch(requestStock5d(symbol)),
    requestStock1d: symbol => dispatch(requestStock1d(symbol)),
    requestCompany: symbol => dispatch(requestCompany(symbol)),

    createWatchlist: watchlist => dispatch(createWatchlist(watchlist)),
    deleteWatchlist: watchlistId => dispatch(deleteWatchlist(watchlistId)),

    fetchUser: user_id => dispatch(fetchUser(user_id)),
})

export default connect(msp, mdp)(StockShow)