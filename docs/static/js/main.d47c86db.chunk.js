(this["webpackJsonpclean-energy"]=this["webpackJsonpclean-energy"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),l=a.n(r),s=a(9),o=a(10),c=a(12),m=a(11),d=a(13),h=a(5),u=a(6),p=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({isLoading:!0}),e.setState({zipCode:e.state.input}),fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(e.state.input,",us&APPID=7f838af83bf39591f00de86b6f7329e1")).then((function(t){if(t.ok)return t.json();throw new Error("Invalid Zip Code:  ".concat(e.state.input,"."))})).then((function(t){return e.setState({currentWeather:t,isLoading:!1})})).catch((function(t){return e.setState({eRRor:t,isLoading:!1})}))},e.refreshPage=function(){window.location.reload(!0)},e.state={isLoading:!1,eRRor:null,input:"",zipCode:"N/A",currentWeather:{main:{temp:"255.38",humidity:"",temp_min:"255.38",temp_max:"255.38"},name:"",wind:{speed:""},weather:[{description:""}]}},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentWeather,a=e.zipCode,n=e.isLoading,r=e.eRRor;if(r)return i.a.createElement("div",{className:"text-center"},i.a.createElement("p",null,r.message),i.a.createElement("button",{type:"button",value:"Refresh",className:"btn btn-secondary",onClick:this.refreshPage},"Refresh"));if(n)return i.a.createElement("p",null,"Loading...");var l=2.237*t.wind.speed,s=9*(t.main.temp_max-273.15)/5+32,o=9*(t.main.temp-273.15)/5+32,c=9*(t.main.temp_min-273.15)/5+32;return i.a.createElement("div",{className:"container d-flex justify-content-center"},i.a.createElement("table",{className:"table table-dark table-striped table-bordered table-sm text-center w-75"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"h6"},i.a.createElement("td",{className:"align-middle text-warning"},"Enter a Zip Code for current Weather data:"),i.a.createElement("td",null,i.a.createElement("input",{type:"text",size:"8",maxLength:"5",className:"h6",onChange:this.onInputChange}),i.a.createElement("button",{type:"submit",value:"Submit",className:"h6",onClick:this.onButtonSubmit},"Submit"))),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Current Temp.:"),i.a.createElement("td",null,o.toFixed(1)," F")),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"High Temp.:"),i.a.createElement("td",null,s.toFixed(1)," F")),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Low Temp.:"),i.a.createElement("td",null,c.toFixed(1)," F")),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Cloudiness:"),i.a.createElement("td",null,t.weather[0].description)),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Wind Speed:"),i.a.createElement("td",null,l.toFixed(1)," mph")),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Humidity:"),i.a.createElement("td",null,t.main.humidity,"%")),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"City:"),i.a.createElement("td",null,t.name)),i.a.createElement("tr",{className:"h6"},i.a.createElement("td",null,"Zipcode:"),i.a.createElement("td",null,a)))))}}]),t}(n.Component);var g=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section bg-primary text-white portfolio"},i.a.createElement("h2",{className:"page-section-heading text-center text-white"},"Clean Energy Home Page"),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement(p,null),i.a.createElement("div",{className:"container d-flex justify-content-center flex-column masthead"},i.a.createElement("p",{className:"masthead-subheading font-weight-light mb-4"},"Electricity, after food, water and shelter, is probably the most important aspect of modern human life. Reliable electricity is a necessity in our lives, at home, at work, and for recreation. We don\u2019t often appreciate how dependent we are on electricity until there is a power outage."),i.a.createElement("p",{className:"masthead-subheading font-weight-light mb-4"},"The production and use of electricity is going through a transformation, from old coal plants that pollute the environment, to giant wind turbines and shining solar farms. The gasoline automobile is being slowly replaced by electric vehicles, and everyone has a smart phone that needs daily charging."),i.a.createElement("p",{className:"masthead-subheading font-weight-light mb-0"},"This website is dedicated to educating the average person on how electricity is generated and delivered to our homes, businesses and industries. The pages will start with the basics and build to the expert level. You can go as deeply as you want. We hope you enjoy the trip."))))};a(27);var b=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section bg-primary text-white portfolio"},i.a.createElement("h2",{className:"page-section-heading text-center"},"Who We Are"),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-6 mb-5 text-right"},i.a.createElement("img",{className:"facephoto",src:"https://raw.githubusercontent.com/cawensley/clean-energy/master/src/pages/about/kenface.jpg",alt:"Load Error!"})),i.a.createElement("div",{className:"col-6 mb-5 text-left pl-3 pr-5"},i.a.createElement("p",{className:"lead text-uppercase font-weight-bold"},"Ken Wilson \u2013 Engineer and Scientist"),i.a.createElement("p",{className:"lead"},"Ken Wilson is a lifetime learner and holds master\u2019s degrees in electrical engineering (1974 University of Illinois) and biology (2014 University of Colorado). He spent 18 years at Bell Labs as a systems engineer in telecommunications. From 1998 to 2008 he was an expert witness and consultant for telecommunications companies. From 2009 to the present he has worked as a consultant and expert witness in the energy industry, currently on the staff of Western Resource Advocates in Boulder Colorado."))),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-6 mb-5 text-right"},i.a.createElement("img",{className:"facephoto",src:"https://raw.githubusercontent.com/cawensley/clean-energy/master/src/pages/about/AlexWensleyCrop.jpg",alt:"Load Error!"})),i.a.createElement("div",{className:"col-6 mb-5 text-left pl-3 pr-5"},i.a.createElement("p",{className:"lead text-uppercase font-weight-bold"},"Alex Wensley \u2013 Webmaster and Engineer"),i.a.createElement("p",{className:"lead"},"Alex Wensley is a Junior Web Developer and has a masters degree in Materials Science & Engineering (2005 Virginia Tech). He spent 11 years solving material failures for both litigation and industrial clients, and is a registered professional engineer in N.C. From 2019 to the present he has studied web development and networking engineering.")))))},f=(a(28),function(e){var t=e.CardPhoto,a=e.Title,n=e.Description,r=e.Weblink;return i.a.createElement("div",{className:"card d-inline-flex align-content-start d-wrap"},i.a.createElement("img",{className:"imagz card-img-top",src:t,alt:"Error Loading"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},a),i.a.createElement("p",{className:"card-text lead"},n),i.a.createElement(h.b,{to:r,className:"btn btn-primary"},"Learn More!")))}),v=function(e){var t=e.EducationPages;return i.a.createElement("div",null,t.map((function(e,a){return i.a.createElement(f,{key:a,CardPhoto:t[a].CardPhoto,Title:t[a].Title,Description:t[a].Description,Weblink:t[a].Weblink})})))},w=[{CardPhoto:"https://fsmedia.imgix.net/4f/2a/c7/1f/6e01/41ff/8fa5/9774418130fc.jpeg",Title:"Solar Power",Description:"The sun is the primary source of energy for Planet Earth.  Plants capture sunlight and convert it into\nbiomass with an efficiency of about 2%. Photovoltaic cells can convert sunlight into electricity with an\nefficiency approaching 20%. The website will explain how this is done, its advantages and limitations.",Weblink:"/education/solar"},{CardPhoto:"https://www.tneigroup.com/sites/default/files/american-public-power-association-430862-unsplash.jpg",Title:"Wind Power",Description:"The sun\u2019s energy also creates wind by heating the earth and the atmosphere. Wind turbines are\ndesigned to capture wind energy and convert it directly into electricity. The website will explain how\nthis is done, its advantages and limitations.",Weblink:"/education/wind"},{CardPhoto:"https://cnet3.cbsistatic.com/img/tbFx9jG9mH1s5THbLCn6E0rG_wM=/1092x0/2019/09/04/1ac9bd24-492d-4b8c-bc0b-9166bc60c1ef/2020-porsche-taycan-014.jpg",Title:"Electric Cars",Description:"The combustion engine has revolutionized transportation over the past hundred years. The next\nhundred years will see transportation moving from combustion engines to electric engines. This website\nwill explain the basics of the electrification of transportation.",Weblink:"/education/electricCars"}];var E=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section portfolio bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"page-section-heading text-center text-white"},"Clean Energy Education"),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement(v,{EducationPages:w}))))};var y=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section portfolio bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"page-section-heading text-center text-white"},w[0].Title),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-3"},i.a.createElement("img",{className:"imagzlarge",src:w[0].CardPhoto,alt:"Error Loading"})),i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-5 pagesdescription"},w[0].Description)),i.a.createElement("div",{className:"portfolio text-white"},i.a.createElement("p",{className:"lead mb-5"},"Solar power is the conversion of energy from sunlight into electricity, either directly using photovoltaics (PV), indirectly using concentrated solar power, or a combination. Concentrated solar power systems use lenses or mirrors and tracking systems to focus a large area of sunlight into a small beam. Photovoltaic cells convert light into an electric current using the photovoltaic effect."),i.a.createElement("p",{className:"lead mb-5"},"Photovoltaics were initially solely used as a source of electricity for small and medium-sized applications, from the calculator powered by a single solar cell to remote homes powered by an off-grid rooftop PV system. Commercial concentrated solar power plants were first developed in the 1980s. The 392 MW Ivanpah installation is the largest concentrating solar power plant in the world, located in the Mojave Desert of California."),i.a.createElement("p",{className:"lead mb-5"},"As the cost of solar electricity has fallen, the number of grid-connected solar PV systems has grown into the millions and utility-scale photovoltaic power stations with hundreds of megawatts are being built. Solar PV is rapidly becoming an inexpensive, low-carbon technology to harness renewable energy from the Sun. The current largest photovoltaic power station in the world is the 850 MW Longyangxia Dam Solar Park, in Qinghai, China."),i.a.createElement("p",{className:"lead mb-5"},'The International Energy Agency projected in 2014 that under its "high renewables" scenario, by 2050, solar photovoltaics and concentrated solar power would contribute about 16 and 11 percent, respectively, of the worldwide electricity consumption, and solar would be the world\'s largest source of electricity. Most solar installations would be in China and India. In 2017, solar power provided 1.7% of total worldwide electricity production, growing at 35% per annum. As of 2018, the unsubsidised levelised cost of electricity for utility scale solar power is around $43/MWh.')))))};var N=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section portfolio bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"page-section-heading text-center text-white"},w[1].Title),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-3"},i.a.createElement("img",{className:"imagzlarge",src:w[1].CardPhoto,alt:"Error Loading"})),i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-5 pagesdescription"},w[1].Description)),i.a.createElement("div",{className:"portfolio text-white"},i.a.createElement("p",{className:"lead mb-5"},"Wind power or wind energy is the use of wind to provide the mechanical power through wind turbines to turn electric generators and traditionally to do other work, like milling or pumping. Wind power is a sustainable and renewable energy, and has a much smaller impact on the environment compared to burning fossil fuels."),i.a.createElement("p",{className:"lead mb-5"},'Wind farms consist of many individual wind turbines, which are connected to the electric power transmission network. Onshore wind is an inexpensive source of electric power, competitive with or in many places cheaper than coal or gas plants. Onshore wind farms also have an impact on the landscape, as typically they need to be spread over more land than other power stations and need to be built in wild and rural areas, which can lead to "industrialization of the countryside" and habitat loss. Offshore wind is steadier and stronger than on land and offshore farms have less visual impact, but construction and maintenance costs are considerably higher. Small onshore wind farms can feed some energy into the grid or provide electric power to isolated off-grid locations.'),i.a.createElement("p",{className:"lead mb-5"},"Wind is an intermittent energy source, which cannot make electricity nor be dispatched on demand. It also gives variable power, which is consistent from year to year but varies greatly over shorter time scales. Therefore, it must be used together with other electric power sources or batteries to give a reliable supply. As the proportion of wind power in a region increases, more conventional power sources are needed to back it up (such as fossil fuel power and nuclear power), and the grid may need to be upgraded. Power-management techniques such as having dispatchable power sources, enough hydroelectric power, excess capacity, geographically distributed turbines, exporting and importing power to neighboring areas, energy storage, or reducing demand when wind production is low, can in many cases overcome these problems. Weather forecasting permits the electric-power network to be readied for the predictable variations in production that occur."),i.a.createElement("p",{className:"lead mb-5"}," In 2018, global wind power capacity grew 9.6% to 591 GW. In 2017, yearly wind energy production grew 17%, reaching 4.4% of worldwide electric power usage, and providing 11.6% of the electricity in the European Union. Denmark is the country with the highest penetration of wind power, with 43.4% of its consumed electricity from wind in 2017. At least 83 other countries are using wind power to supply their electric power grids.")))))};var x=function(){return i.a.createElement("h1",null,i.a.createElement("div",{className:"page-section portfolio bg-primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"page-section-heading text-center text-white"},w[2].Title),i.a.createElement("div",{className:"divider-custom divider-light"},i.a.createElement("div",{className:"divider-custom-line"}),i.a.createElement("div",{className:"divider-custom-icon"},i.a.createElement("i",{className:"fas fa-bolt"})),i.a.createElement("div",{className:"divider-custom-line"})),i.a.createElement("div",{className:"row d-flex"},i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-3"},i.a.createElement("img",{className:"imagzlarge",src:w[2].CardPhoto,alt:"Error Loading"})),i.a.createElement("div",{className:"col-lg-6 col-xl-6 mb-5 pagesdescription"},w[2].Description)),i.a.createElement("div",{className:"portfolio text-white"},i.a.createElement("p",{className:"lead mb-5"},"An electric car is an automobile that is propelled by one or more electric motors, using energy stored in rechargeable batteries. The first practical electric cars were produced in the 1880s. Electric cars were popular in the late 19th century and early 20th century, until advances in internal combustion engines, electric starters in particular, and mass production of cheaper gasoline vehicles led to a decline in the use of electric drive vehicles."),i.a.createElement("p",{className:"lead mb-5"},"From 2008, a renaissance in electric vehicle manufacturing occurred due to advances in batteries, illnesses and deaths due to air pollution, and the desire to reduce greenhouse gas emissions. Several national and local governments have established government incentives for plug-in electric vehicles, tax credits, subsidies, and other incentives to promote the introduction and adoption in the mass market of new electric vehicles, often depending on battery size, their electric range and purchase price. The current maximum tax credit allowed by the US Government is US$7,500 per car.[6] Compared with internal combustion engine cars, electric cars are quieter, have no tailpipe emissions, and lower emissions in general. In January 2019 and updated in April, a Reuters analysis of 29 global automakers concluded that automakers are planning on spending $300 billion over next 5 to 10 years on electric cars, with 45% of that in China."),i.a.createElement("p",{className:"lead mb-5"},"Charging an electric car can be done at a variety of charging stations, these charging stations can be installed in both houses and public areas. The two all-time best selling electric cars, the Nissan Leaf and the Tesla Model S, have EPA-rated ranges reaching up to 243 km (151 miles) and 600 km (370 miles) respectively. The Leaf is the best-selling highway-capable electric car ever with more than 400,000 units sold, followed by the Tesla Model S with over 400,000 units sold worldwide by June 2019."),i.a.createElement("p",{className:"lead mb-5"},"As of December 2018, there were about 5.3 million light-duty all-electric and plug-in hybrid vehicles in use around the world. Despite the rapid growth experienced, the global stock of plug-in electric cars represented just about 1 out of every 250 vehicles (0.40%) on the world's roads by the end of 2018. The plug-in car market is shifting towards fully electric battery vehicles, as the global ratio between annual sales of battery BEVs and PHEVs went from 56:44 in 2012, to 60:40 in 2015, and rose to 69:31 in 2018.")))))},C=function(){return i.a.createElement("nav",{className:"navbar navbar-expand bg-secondary fixed-top text-uppercase",id:"mainNav"},i.a.createElement("div",{className:"container"},i.a.createElement(h.b,{to:"/",className:"navbar-brand nav-link py-3 px-3 rounded"},"Home"),i.a.createElement("div",null,i.a.createElement("ul",{className:"navbar-nav navbar-expand ml-auto"},i.a.createElement("li",{className:"nav-item mx-1"},i.a.createElement(h.b,{to:"/education",className:"nav-link py-3 px-3 rounded"},"Education")),i.a.createElement("li",{className:"nav-item mx-1"},i.a.createElement(h.b,{to:"/about",className:"nav-link py-3 px-3 rounded"},"About"))))))},k=function(){return i.a.createElement("div",null,i.a.createElement("footer",{className:"footer text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"mb-3 mb-lg-0"},i.a.createElement("h4",{className:"text-uppercase lead font-weight-bold mb-3"},"WRA Headquarters"),i.a.createElement("p",{className:"copyright bg-secondary mb-0"},"2260 Baseline Road, Suite 200"),i.a.createElement("p",{className:"copyright bg-secondary  mb-0"},"Boulder CO 80302"),i.a.createElement("p",{className:"copyright bg-secondary  mb-0"},"Phone: 303.444.1188"),i.a.createElement("p",{className:"copyright bg-secondary  mb-1"},"Fax: 303.786.8054"),i.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.facebook.com/westernresourceadvocates"},i.a.createElement("i",{className:"fab fa-fw fa-facebook-f"})),i.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://twitter.com/wradv"},i.a.createElement("i",{className:"fab fa-fw fa-twitter"})),i.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.linkedin.com/company/western-resource-advocates"},i.a.createElement("i",{className:"fab fa-fw fa-linkedin-in"})),i.a.createElement("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.instagram.com/westernresourceadvocates/"},i.a.createElement("i",{className:"fab fa-instagram"}))))),i.a.createElement("section",{className:"copyright py-1 text-center text-white"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9 Clean-Energy Website 2019"))))},W=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.a,null,i.a.createElement("div",null,i.a.createElement(C,null),i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/education/solar",component:y}),i.a.createElement(u.a,{path:"/education/wind",component:N}),i.a.createElement(u.a,{path:"/education/electricCars",component:x}),i.a.createElement(u.a,{path:"/education",component:E}),i.a.createElement(u.a,{path:"/about",component:b}),i.a.createElement(u.a,{path:"/",component:g})),i.a.createElement(k,null))))}}]),t}(n.Component);a(34),a(35),a(36),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d47c86db.chunk.js.map