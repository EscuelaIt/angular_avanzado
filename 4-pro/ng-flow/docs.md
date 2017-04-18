npm uninstall -g angular-cli
npm cache clean
npm install -g @angular/cli@latest
npm run ng new angular -p ab -is true -it true
npm start
npm i milligram --save
.angular-cli styles
ng g m core
ng g c core/shell
ng g c core/shell/top-bar
ng g c core/shell/main-content
app.component
ng g m shared
ng g m home
ng g c home/home --flat true
ng g m about
ng g c about/about --flat true
ng g c about/about/email
ng g c about/about/social
npm run prod