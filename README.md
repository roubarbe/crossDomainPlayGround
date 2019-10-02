# crossDomainPlayGround
 WebPage with different scripts to execute, could be used in iFrames, in redirects, etc.

## Different exploits
 ### /exploits/alert/[message]
  This splurts an empty page with a script tag, set to show an alert, with the specific message in the url.
 ### /exploits/image/[url]
  This splurts the provided image from another domain, make sure the URL is "encoded". You can use a service like: https://www.urlencoder.org/
 ### /exploits/dataGather/[domain]
  This will try to gather as many information as possible from the original host/frame/window that rendered this page in an iFrame. Domain must be specified to allow CORS

## QOL objects
 ### htmlBuildingBlocks
  This helps in quickly building small webpages with actions such as an alert window, console.log or specifying a new domain.

## Where can I find the app?
App is situated here: https://cdpg.herokuapp.com 

# Have fun !