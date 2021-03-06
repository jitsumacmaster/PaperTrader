# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do 
    User.destroy_all
    Watchlist.destroy_all
    # Create demo/testing users
    User.create({ username: 'demo_user', password: 'password' })
    User.create({ username: 'test', password: 'password' })

    Watchlist.create({ user_id: '1', symbol: 'AAPL' })
    Watchlist.create({ user_id: '1', symbol: 'GOOG' })
    Watchlist.create({ user_id: '1', symbol: 'AMZN' })
    Watchlist.create({ user_id: '1', symbol: 'MSFT' })
    
    Watchlist.create({ user_id: '2', symbol: 'AAPL' })
    Watchlist.create({ user_id: '2', symbol: 'GOOG' })
    Watchlist.create({ user_id: '2', symbol: 'AMZN' })
    Watchlist.create({ user_id: '2', symbol: 'MSFT' })

end

