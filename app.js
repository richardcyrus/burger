/**
 * Eat-Da-Burger!
 *
 * The Coding Boot Camp at UNC Charlotte.
 * (c) 2019 Richard Cyrus <richard.cyrus@rcyrus.com>
 */

const createError = require('http-errors')
const path = require('path')
const logger = require('morgan')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const sassMiddleware = require('express-dart-sass')
const express = require('express')
const exphbs = require('express-handlebars')

const burgerController = require('./controllers/burger')

const app = express()

// view engine setup
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(helmet())
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'script-src': [
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js',
        "'self'",
      ],
      'style-src': [
        "'self'",
        "https: 'unsafe-inline'",
        'https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      ],
    },
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    outputStyle: 'compressed',
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: false,
  })
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', burgerController)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
