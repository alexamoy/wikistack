const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack',
{
    logging: false
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
    hooks:  
    {
        beforeValidate: function (page)
        {
            if (page.title)
            {
                page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
            }
            else
            {
                page.urlTitle = Math.random().toString(36).substring(2, 7);
            }
        }
    },

    getterMethods:
    {
        router: function ()
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