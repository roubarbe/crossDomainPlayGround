# crossDomainPlayGround
 WebPage with different scripts to execute, could be used in iFrames, in redirects, etc.

## Different exploits
 ### /exploits/alert/[message]
  This splurts an empty page with a script tag, set to show an alert, with the specific message in the url.
 ### /exploits/image/[url]
  This splurts the provided image from another domain, make sure the URL is "encoded". You can use a service like: https://www.urlencoder.org/
 ### /exploits/dataGather/[domain]
  This will try to gather as many information as possible from the original host/frame/window that rendered this page in an iFrame. Domain must be specified to allow CORS
 ### /exploits/newWindow
  This opens an empty new window - Not used for anything else for now
 ### /exploits/redirect/[url]
  Opens a new page which then gets redirected to another specified URL (please encore the string)

## QOL object htmlBuildingBlocks
 This helps in quickly building small webpages with actions such as an alert window, console.log or specifying a new domain (and more). For exemple, you add htmlBuildingBlocks.scriptOpen to add to a general page string. It's either that or making a gigantic string mixing HTML and Javascript. You can absolutely do that if you wish, but oof.
 ### scriptOpen()
  returns: `"<script type='text/javascript'>"`
 ### scriptClose()
  returns: `"</script>"`
 ### alertBox([msg])
  returns: `"alert('[msg]');"`
 ### domainChange([domain])
  returns: `"document.domain='[domain]';"`
 ### consoleLog([what])
  returns: `"console.log([what]);"`
 ### imgTag([imgUrl])
  returns: `"<img src='[imgUrl]'>"`
 ### newWindow()
  returns: `"window.open();"`
 ### redirectWindow([newUrl])
  returns: `"document.location.href = '[newUrl]';"`

## Where can I find the app?
App is situated here: https://cdpg.herokuapp.com 

# Have fun !