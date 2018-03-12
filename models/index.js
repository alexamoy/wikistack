const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',
{
    //logging: false
});

const Page = db.define('page', 
{
    title: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: 
    {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: 
    {
        type: Sequelize.ENUM('open', 'closed'),
    },
    date: 
    {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
},
{
    getterMethods:
    {
        router()
        {
            return '/wiki/' + this.urlTitle;
        }
    }
});

const User = db.define('user', 
{
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = 
{
    db: db,
    Page: Page,
    User: User
};