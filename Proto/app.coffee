Framer.Device.background.backgroundColor = "#151818"

# Import a VideoPlayer module https://github.com/stakes/Framer-VideoPlayer
{VideoPlayer} = require "videoplayer"

# CREDIT SQUEEZE 1 - First Episode   - Moved to the front to place behind the video
CS1Container = new Layer
	height: 720
	width: 1280
	x: 300
	opacity: 0
	backgroundColor: ""
	
CS1Morefocus = new Layer
	height: 195
	width: 78
	x: 1137
	y: 122
	opacity: 0
	backgroundColor: ""
	image: "images/moreFocus.png"

CS1Morefocus.states.Selected =
	opacity: 1
CS1Morefocus.states.Unselected =
	opacity: 0
	

CS1grid = new Layer
	image: "images/CS1WatchNextGrid.png"
	width: 1037 
	height: 720
	parent: CS1Container
	x: 589

CS1UIelements = new Layer
	height: 720
	width: 1280
	x: 0
	image: "images/CreditSqueezeFirst.png"
	parent: CS1Container

CS1FullscreenBack = new Layer
	parent: CS1Container
	image: "images/CS1FullscreenBack.png"
	height: 28
	width: 79
	y: 237
	x: 51

CS1UIelements.states.hidden =
	opacity: 0
	
CS1UIelements.states.visible =
	opacity: 1

CS1Container.states.peeking =
	x: 0	
	opacity: 1

CS1Container.states.hide =
	x: 300
	opacity: 0
	
CS1Container.states.fullscreen =
	x: -530
	opacity: 1

CSItemFocusa = new Layer
	parent: CS1Container
	height: 196
	image: "images/NextEpisodeFocus.png"
	width: 241
	opacity: 0
	x:889
	y:119

CSItemFocusa.states.Selected =
	opacity: 1

CSItemFocusa.states.Unselected =
	opacity: 0

CSEpisodeAutoplay = new Layer
	parent: CS1Container
	image: "images/EpisodeAutoplayCountdown.png"
	width: 241
	height: 95
	x:888
	y:161
	opacity: 1



CSEpisodeAutoplay.states.Disabled =
	opacity: 0
	
CSEpisodeAutoplay.states.Enabled =
	opacity: 1

CSItem2Focusa = new Layer
	parent: CS1Container
	height: 196
	image: "images/NextEpisodeFocus.png"
	width: 241
	opacity: 0
	x:889
	y:119

CSItem2Focusa.states.Selected =
	opacity: 1

CSItem2Focusa.states.Unselected =
	opacity: 0

CSBacka = new Layer
	parent: CS1Container
	image: "images/CreditSBack_BtnOver.png"
	width: 196
	height: 50
	x: 0
	y: 572
	opacity: 0
	
CSBacka.states.Selected =
	opacity: 1
	
CSBacka.states.Unselected =
	opacity: 0

CSReplaya = new Layer
	parent: CS1Container
	image: "images/CreditReplay_BtnOvr.png"
	width: 50
	height: 50
	x: 202
	y: 572
	opacity: 0

CSReplaya.states.Selected =
	opacity: 1

CSReplaya.states.Unselected =
	opacity: 0
	
# CREDIT SQUEEZE 2 - Last Episode BIG promo
BigPromoContainer = new Layer
	height: 720
	width: 1615
	x: 300
	opacity: 0
	backgroundColor: ""

BigPromoContainer.states.peeking =
	x: 0
	opacity: 1
BigPromoContainer.states.hide =
	x: 300
	opacity: 0
BigPromoContainer.states.fullscreen =
	x: -308
	opacity: 1

BigPromoImage = new Layer
	image: "images/Bigpromobrandimage.png"
	height: 527
	width: 939
	y:-76
	parent: BigPromoContainer
	x: 578
	
BigPromoImage.states.fullscreen =
	x: 700
BigPromoImage.states.peeking =
	x: 578

	
BigPromoContent = new Layer
	image: "images/NextScreen_Big.png"
	height: 720
	width: 1615
	x: 0
	parent: BigPromoContainer
	
CSBigPromoFocus = new Layer
	parent: BigPromoContainer
	width: 277
	height: 50
	image: "images/PlaySeries1Episode1Focus.png"
	opacity: 0
	x: 479
	y: 243

CSBigPromoFocus.states.Selected =
		opacity : 1
CSBigPromoFocus.states.Unselected =
		opacity : 0

CSBigPromoFocus2 = new Layer
	parent: BigPromoContainer
	width: 277
	height: 50
	image: "images/PlaySeries1Episode1Focus.png"
	opacity: 0
	x: 479
	y: 243

CSBigPromoFocus2.states.Selected =
		opacity : 1
CSBigPromoFocus2.states.Unselected =
		opacity : 0


CSBackb = new Layer
	parent: BigPromoContainer
	image: "images/CreditSBack_BtnOver.png"
	width: 196
	height: 50
	x: 0
	y: 572
	opacity: 0
	
CSBackb.states.Selected =
	opacity: 1
	
CSBackb.states.Unselected =
	opacity: 0

CSReplayb = new Layer
	parent: BigPromoContainer
	image: "images/CreditReplay_BtnOvr.png"
	width: 50
	height: 50
	x: 202
	y: 572
	opacity: 0

CSReplayb.states.Selected =
	opacity: 1

CSReplayb.states.Unselected =
	opacity: 0

CSRightArrow = new Layer 
	image: "images/ArrowRight.png"
	height: 28
	width: 17
	y: 360
	x: 1200

CSRightArrow.states.visible =
	opacity: 1

CSRightArrow.states.invisible =
	opacity: 0

# Create and position the VideoPlayer
video = new VideoPlayer
	video: "FirstEpisode.mp4"
	width: 1280
	height: 720
	autoplay: false
	muted: true
	opacity: 1
	
video.states.squeezeout =
	x:-700
video.states.squeezeon =
	x: 0
	
video2 = new VideoPlayer
	video: "LastEpisode.mp4"
	width: 1280
	height: 720
	autoplay: false
	muted: true
	opacity: 1
	
video2.states.squeezeout =
	x:-500
video2.states.squeezeon =
	x: 0

# Create a background layer to cover the Video Player on other pages
Background = new Layer
	height: 720
	backgroundColor: "#1E2226"
	width: 1280
	
# Visible and invisible state for the background layer	
Background.states.visible =
		opacity: 1
		backgroundColor: "#1E2226"

Background.states.hidden =
		opacity: 0
		backgroundColor: "rgba(123,123,123,0)"

# Create a main container for everything
Container = new Layer
	height: 720
	width: 1280
	backgroundColor: "rgba(123,123,123,0)"

# HOMEPAGE SECTION

# HOMEPAGE CONTENT CONTAINER
HomeContent = new Layer
	parent: Container
	height: 973
	image: "images/HomeContent.png"
	width: 1232
	x: 125
	y: 40

# HOMEPAGE CONTENT CONTAINER STATES
HomeContent.states.unselected =
		x: 125
HomeContent.states.hidden =
		opacity: 0
		x: -100

HomeFocus = new Layer
	parent: HomeContent
	y: 33
	width: 650
	height: 281
	borderWidth: 4
	borderColor: "rgba(255,255,255,1)"
	backgroundColor: "rgba(123,123,123,0)"
	opacity: 0
	x: 128

HomeFocus.states.selected =
		opacity : 1
HomeFocus.states.unselected =
		opacity : 0
HomeContent.states.selected =
		x: 52
		opacity : 1

LeftMenu = new Layer
	parent: Container
	height: 721
	image: "images/LeftMenu.png"
	width: 240
	
LeftMenu.states.selected =
		x: 0
LeftMenu.states.unselected =
		x: -240


# BRANDHUB SECTION
BrandHub = new Layer
	parent: Container
	height: 720
	image: "images/Brand_hub.png"
	width: 1280
	opacity: 0
	x: 176

BrandHub.states.selected =
	opacity: 1
	x: 0
BrandHub.states.unselected =
	opacity : 0
	x: 176
	
BrandHub.states.selectedwatching =
	opacity : 0
	x: -176
	
SeriesNavigation = new Layer
	parent: BrandHub
	image: "images/SeriesNavigation.png"
	width: 181
	height: 168
	x: 176
	y: 194
	
SeriesNavigation.states.Series1 =
	y: 194
	
SeriesNavigation.states.Series2 =
	y: 143


EpisodeList = new Layer
	image: "images/BrandhubEpisodeList1.png"
	width: 780
	height: 558
	parent: BrandHub
	x: 417
	y: 162
	originY: 0

EpisodeList.states.Series1 =
	image: "images/BrandhubEpisodeList1.png"
	width: 780
	height: 558	

	
EpisodeList.states.Series2 =
	image: "images/BrandhubEpisodeList2.png"
	width: 780
	height: 558	

EpisodeList.animationOptions =
	curve: Bezier.ease
	time: 2


Series1Focus = new Layer
	parent: SeriesNavigation
	image: "images/BrandhubSeries1Focus.png"
	y: 34
	height: 50
	x: -16
	width: 240
	opacity: 0

Series1Focus.states.selected =
		opacity: 1
Series1Focus.states.unselected =
		opacity : 0
Series1Focus.states.active =
		opacity: 1

Series2Focus = new Layer
	parent: SeriesNavigation
	image: "images/BrandhubSeries2Focus.png"
	y: 84
	height: 50
	x: -15
	width: 240
	opacity: 0

Series2Focus.states.selected =
		opacity: 1
Series2Focus.states.unselected =
		opacity : 0
Series2Focus.states.active =
		opacity: 1
		
# A Selected State for Series

Series1Selected = new Layer
	parent: BrandHub
	image: "images/BrandhubSeries1Selected.png"
	height: 50
	x: 161
	width: 240
	opacity: 0
	y: 228

Series1Selected.states.selected =
		opacity: 1
Series1Selected.states.unselected =
		opacity : 0
		
Series2Selected = new Layer
	parent: BrandHub
	image: "images/BrandhubSeries2Selected.png"
	y: 228
	height: 50
	x: 162
	width: 240
	opacity: 0

Series2Selected.states.selected =
		opacity: 1
Series2Selected.states.unselected =
		opacity : 0

FirstEpisodeFocus = new Layer
	parent: BrandHub
	image: "images/BrandhubFirstEpisodeFocus.png"
	y: 162
	height: 135
	x: 417
	width: 780
	opacity: 0
	
FirstEpisodeFocus.states.selected =
		opacity: 1
FirstEpisodeFocus.states.unselected =
		opacity : 0
FirstEpisodeFocus.states.lastselected =
		opacity: 1
		
LastEpisodeFocus = new Layer
	parent: BrandHub
	image: "images/BrandhubLastEpisodeFocus.png"
	y: 162
	height: 135
	x: 417
	width: 780
	opacity: 0
	
LastEpisodeFocus.states.selected =
		opacity: 1
LastEpisodeFocus.states.unselected =
		opacity : 0
LastEpisodeFocus.states.lastselected =
		opacity: 1

# VIDEO PLAYER & PLAYBACK 

Controls = new Layer
	parent: Container
	height: 156
	image: "images/Controls.png"
	width: 1280
	y: 720

Controls.states.selected =
		y: 564
Controls.states.unselected =
		y: 874
		x: 0
		
watchNextThumb = new Layer 
	image: "images/watchNextThumb.png"
	width: 238
	height: 135
	parent: Controls
	x: 1043
	y: 1
	
watchNextThumb.states.visible =
	y: -134

watchNextThumb.states.invisible = 
	y: 400

 
	 
		
VideoTitle = new Layer 
	parent: Controls
	image: "images/TitleFirstEpisode.png"
	width: 386
	height: 22
	x: 275
	y: 24
	opacity: 1

VideoTitle.states.FirstEpisode =
	image: "images/TitleFirstEpisode.png"
	width: 386
	height: 22
	
VideoTitle.states.LastEpisode =
	image: "images/TitleLastEpisode.png"
	width: 405
	height: 22


# UPNEXT RIGHT HAND SIDE PANEL
# FIRST EPISODE

RightPanelFirst = new Layer
	height: 720
	width: 1280
	backgroundColor: "#1E2226"
	x: 1280
	opacity: 1
	
RightPanelFirstContent1 = new Layer
	parent: RightPanelFirst
	height: 616
	image: "images/RightpanelContent1.png"
	width: 401
	x: 50
	y: 104

RightPanelFirstContent1.states.fullscreen =
	x: 177
	animationOptions: 
		time: 0.7
		curve: "ease-out"
	
RightPanelFirstContent1.states.peeking =
	x: 50

CatastropheFocus2 = new Layer
	parent: RightPanelFirst
	height: 196
	image: "images/NextEpisodeFocus2.png"
	width: 241
	opacity: 0
	x: 336
	y: 162
		
CatastropheFocus2.states.FirstEpisode =
	image: "images/NextEpisodeFocus2.png"
	
CatastropheFocus2.states.LastEpisode =
	image: "images/NextItemFocus.png"
		
CatastropheFocus2.states.Selected =
	opacity: 1
	


CatastropheFocus2.states.Unselected =
	opacity: 0
	animationOptions: 
		time: 0.1
		curve: "ease-out"
	

UpNextPanelElementsState1 = new Layer
	parent: RightPanelFirst
	height: 558
	width: 520
	x: 20
	y: 163
	image: "images/UpNextPanelState1.png"
	
	
UpNextPanelElementsState1.states.visible =
	opacity: 1
UpNextPanelElementsState1.states.invisible =
	opacity: 0
	
	
UpNextPanelElementsState2 = new Layer
	parent: RightPanelFirst
	x: 50
	y: 162
	height: 558
	image: "images/UpNextPanelState2.png"
	width: 1025
	opacity: 0

UpNextPanelElementsState2.states.visible =
	opacity: 1
UpNextPanelElementsState2.states.invisible =
	opacity: 0
	
RightPanelFirst.states.peeking =
	opacity: 1
	x: 662

RightPanelFirst.states.peeking_end =
	opacity: 1
	x: 662
	options:
		delay: 14.60

RightPanelFirst.states.fullscreen =
	opacity: 1
	x: 0
	animationOptions: 
		time: 0.7
		curve: "ease-out"
		
RightPanelFirst.states.unselected =
	opacity: 1
	x: 1280

RightPanelFirst.states.flyleft =
	x: 97
	opacity: 1
	

CatastropheFocus = new Layer
	parent: RightPanelFirst
	height: 196
	image: "images/NextEpisodeFocus.png"
	width: 241
	opacity: 0
	x:209
	y:162
	
CatastropheFocus.states.FirstEpisode =
	image: "images/NextEpisodeFocus.png"
	
CatastropheFocus.states.Selected =
	opacity: 1

CatastropheFocus.states.Unselected =
	opacity: 0
		
moreFocus = new Layer
	parent: RightPanelFirst
	height: 195
	image: "images/moreFocus.png"
	width: 78
	x: 460
	y: 162
	opacity: 0
	
moreFocus.states.Unselected =
	opacity: 0
moreFocus.states.Selected =
	opacity: 1

# UPNEXT RIGHTHAND SIDE PANEL
# LAST EPISODE

RightPanelLast = new Layer
	height: 720
	width: 1280
	backgroundColor: "#1E2226"
	x: 1290
	opacity: 1

RightPanelLast.states.peeking =
	opacity: 1
	x: 690
RightPanelLast.states.peeking2 =
	opacity: 1
	x: 690
	animationOptions: 
		time: 0.4
		curve: "ease-out"
		delay: 0.5
	
RightPanelLast.states.peeking_end =
	opacity: 1
	x: 640
	options:
		delay: 14.60

RightPanelLast.states.fullscreen =
	opacity: 1
	x: 0
	animationOptions: 
		time: 0.7
		curve: "ease-out"
		
RightPanelLast.states.unselected =
	opacity: 1
	x: 1290

RightPanelLast.states.flyleft =
	x: 97
	opacity: 1
	
BigPromoBrandImage = new Layer
	image: "images/Bigpromobrandimage.png"
	parent: RightPanelLast
	height: 528
	width: 937
	y: -57
	x: 405
	opacity: 0

BigPromoBrandImage.states.small =
	height: 528
	width: 937
	y: -57
	x: 405
	opacity: 0
	animationOptions: 
		time: 0.3
		curve: "ease-out"
		delay: 0.1
	
BigPromoBrandImage.states.big =
	height: 528
	width: 937
	y: -57
	x: 405
	opacity: 1
	animationOptions: 
		time: 0.3
		curve: "ease-out"
		delay: 0.9
			
RightPanelBigPromoFullscreenInfo = new Layer
	image: "images/RightPanelBigPromoFullscreenInfo.png"
	width: 1280
	height: 720
	parent: RightPanelLast
	opacity: 0
	x: 0

RightPanelBigPromoFullscreenInfo.states.Visible =
	opacity: 1
	animationOptions: 
		time: 0.4
		curve: "ease-out"
		delay: 0.7
	

RightPanelBigPromoFullscreenInfo.states.Invisible =
	opacity: 0
	animationOptions: 
		time: 0.3
		curve: "ease-out"
		delay: 0.3

RightPanelGridLastEpisodeY = new Layer
	parent: RightPanelLast
	y: 121
	x: 52
	width: 898
	height: 616
	backgroundColor: ""

RightPanelGridLastEpisode = new Layer
	parent: RightPanelGridLastEpisodeY
	image: "images/RightPanelGridLastEpisode.png"
	width: 898
	height: 616
	y: 0
	x: 0
	
# RightPanelGridLastEpisode.states.fullscreen =


	
RightPanelGridLastEpisode.states.peeking =
	y: 121
	x: 52

RightPanelPeekingInfo = new Layer
	parent: RightPanelLast
	image: "images/BigPromo_SidepanelInfo.png"
	height: 720
	width: 616
	x: -11
	y: 1

RightPanelPeekingInfo.states.Visible =
	opacity: 1
RightPanelPeekingInfo.states.Visible2 =
	opacity: 1
	animationOptions: 
		delay: 0.8
		curve: "ease-out"
		time: 0.5

RightPanelPeekingInfo.states.Invisible =
	opacity: 0
	animationOptions: 
		time: 0.3
		curve: "ease-out"


RightPanelBigPromoFocus = new Layer
	parent: RightPanelLast
	width: 277
	height: 51
	image: "images/PlaySeries1Episode1Focus.png"
	opacity: 0
	x: 174
	y: 238
	


	

RightPanelBigPromoFocus.states.Selected =
		opacity : 1
		animationOptions: 
			time: 0.3
			curve: "ease-out"
			delay: 0.8
			
RightPanelBigPromoFocus.states.Unselected =
		opacity : 0
		animationOptions: 
			time: 0.3
			curve: "ease-out"
			delay: 0.1
		

BigPromoImageSmall = new Layer

	parent: RightPanelLast
	height: 196
	image: "images/BigPromoImageSmallFocus.png"
	width: 241
	opacity: 0
	x: 211
	y: 121
	
	
BigPromoImageSmall.states.Selected =
	opacity: 1

BigPromoImageSmall.states.Selected2 =
	opacity: 1
	animationOptions: 
			time: 0.2
			curve: "ease-out"
			delay: 0.9

BigPromoImageSmall.states.Unselected =
	opacity: 0

RightPanelLastMoreFocus = new Layer 
	parent: RightPanelLast
	height: 195
	image: "images/moreFocus.png"
	width: 78
	x: 460
	y: 120
	opacity: 0
	
RightPanelLastMoreFocus.states.Unselected =
	opacity: 0
RightPanelLastMoreFocus.states.Selected =
	opacity: 1


# VIDEO CONTROLS - Divided into 2 lines to move focus between groupings


BackVideoController = new Layer
	parent: Controls
	image: "images/CtrlsBackBtnFocus.png"
	y: 9
	height: 50
	width: 197
	x: -1
	opacity: 0
	
BackVideoController.states.selected =
		opacity: 1
BackVideoController.states.unselected =
		opacity: 0

PlayPauseVideoController = new Layer
	parent: Controls
	y: 9
	height: 50
	width: 50
	x: 202
	opacity: 1
	
PlayPauseVideoController.states.pauseInactive =	
		image: "images/CtrlsPauseIconInActive.png"
		
PlayPauseVideoController.states.playInactive =		
		image: "images/CtrlsPlayIconInActive.png"
		
PlayPauseVideoController.states.playFocus =
		image: "images/CtrlsPlayIconFocus.png"
		
PlayPauseVideoController.states.pauseFocus =
		image: "images/CtrlsPauseIconFocus.png"

Row1CInfo = new Layer
	parent: Controls
	image: "images/CtrlsInfoBtnFocus.png"
	y: 9
	height: 50
	width: 50
	x: 928
	opacity: 0
	
Row1CInfo.states.selected =	
		opacity: 1
		
Row1CInfo.states.unselected =
		opacity: 0

Row1DSubtitle = new Layer
	parent: Controls
	image: "images/CtrlsSubtitlesBtnFocus.png"
	y: 9
	height: 50
	width: 50
	x: 984
	opacity: 0
	
Row1DSubtitle.states.selected =
		opacity: 1
		
Row1DSubtitle.states.unselected =
		opacity: 0

WatchNextpisodeFocus = new Layer
	parent: Controls
	image: "images/CtrlsWatchNextBtnFocus.png"
	y: 9
	height: 50
	width: 238
	x: 1042
	opacity: 0
	
WatchNextpisodeFocus.states.selected =
	opacity: 1
		
WatchNextpisodeFocus.states.unselected =
	opacity: 0

Row2AScrubber = new Layer
	y: 636
	height: 42
	width: 42
	x: 858
	opacity: 0
	

	


# Mask for elements outside of the tv area


mask1 = new Layer
	y: 720
	x: 8
	width: 1733
	height: 503
	backgroundColor: "rgba(0,0,0,1)"

mask2 = new Layer
	y: -2
	x: 1280
	width: 1733
	height: 1016
	backgroundColor: "rgba(0,0,0,1)"

# Set launch states for the App
video.player.pause()
Controls.animate("unselected")
PlayPauseVideoController.animate("pauseInactive") 
selectedItem = LeftMenu
playerState = "paused"
AppState = "Normal"
EpisodeTime = "New"
LastEpisodeTime = "New"
videoPlaying = "New"

# The function called from the 2 sec Delay, dude to long animation in BIG promo panel
SetSelectedItem = () ->
	Utils.delay 2, ->
		selectedItem = BigPromoImageSmall




# Check for end credits and trigger the credit squeeze
# CREDIT SQUEEZE FOR FIRST EPISODE 
video.player.addEventListener "timeupdate", ->
		if video.player.currentTime >= 618 and video.player.currentTime <= 619
				video.animate
					properties:
						scale: 0.53
						originX: 0
				# Close right panel if it's open
				CatastropheFocus2.animate("Unselected")
				Controls.animate("unselected")
				RightPanelFirst.animate("unselected")
				# CreditSqueeze
				CSItemFocusa.animate("Selected")
				CS1Container.animate("peeking")
				Controls.animate("unselected")
				CSEpisodeAutoplay.animate("Enabled")
				AppState = "CreditSqueeze"
				EpisodeCountdown = new Layer
					parent: CSEpisodeAutoplay
					image: "images/EpisodeCountdown.gif"
					width: 193
					height: 40
					x: 1
					y: 28
				selectedItem = CSItemFocusa

# CREDIT SQUEEZE FOR THE LAST EPISODE - BIG PROMO
video2.player.addEventListener "timeupdate", ->
		if video2.player.currentTime >= 624 and video2.player.currentTime <= 625
				video2.animate
					properties:
						scale: 0.36
						originX: 0
				# Close right panel if it's open
				RightPanelLast.animate("unselected")
				# CreditSqueeze
				CSBigPromoFocus.animate("Selected")
				BigPromoContainer.animate("peeking")
				CSRightArrow.animate("visible")
				Controls.animate("unselected")
				AppState = "CreditSqueeze"
				selectedItem = CSBigPromoFocus



# Check for key press
document.addEventListener 'keydown', (event) ->
	
	keyCode = event.which
	switch keyCode
# Listen for RIGHT arrow input
		when 39
			
			if selectedItem == LeftMenu 
				LeftMenu.animate("unselected")
				HomeContent.animate("selected")
				HomeFocus.animate("selected")
				selectedItem = HomeFocus
			else if selectedItem == Series1Focus
				Series1Focus.animate("unselected")
				Series1Selected.animate("selected")
				FirstEpisodeFocus.animate("selected")
				selectedItem = FirstEpisodeFocus
			else if selectedItem == Series2Focus
				Series2Focus.animate("unselected")
				Series2Selected.animate("selected")
				LastEpisodeFocus.animate("selected")
				selectedItem = LastEpisodeFocus
				
			# While First Episode is playing
			else if selectedItem == BackVideoController and playerState == "play"
				BackVideoController.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				selectedItem = PlayPauseVideoController
			# While First Episode is paused
			else if selectedItem == BackVideoController and playerState == "paused"
				BackVideoController.animate("unselected")
				PlayPauseVideoController.animate("playFocus")
				selectedItem = PlayPauseVideoController
			else if selectedItem == PlayPauseVideoController and playerState == "play"
				PlayPauseVideoController.animate("pauseInactive")
				Row1CInfo.animate("selected")
				selectedItem = Row1CInfo
			else if selectedItem == PlayPauseVideoController and playerState == "paused"
				PlayPauseVideoController.animate("playInactive")
				Row1CInfo.animate("selected")
				selectedItem = Row1CInfo
			else if selectedItem == Row1CInfo
				Row1DSubtitle.animate("selected")
				Row1CInfo.animate("unselected")
				selectedItem = Row1DSubtitle
			else if selectedItem == Row1DSubtitle
				WatchNextpisodeFocus.animate("selected")
				Row1DSubtitle.animate("unselected")
				selectedItem = WatchNextpisodeFocus
			else if selectedItem == CatastropheFocus
				moreFocus.animate("Selected")
				CatastropheFocus.animate("Unselected")
				selectedItem = moreFocus
			else if selectedItem == CSBacka
				CSReplaya.animate("Selected")
				CSBacka.animate("Unselected")
				selectedItem = CSReplaya
			else if selectedItem == CSReplaya
				CSItemFocusa.animate("Selected")
				CSReplaya.animate("Unselected")
				selectedItem = CSItemFocusa
			else if selectedItem == CSItemFocusa
				CS1Morefocus.animate ("Selected")
				CSItemFocusa.animate("Unselected")
				selectedItem = CS1Morefocus
			else if selectedItem == CSReplayb
				CSReplayb.animate("Unselected")
				CSBigPromoFocus.animate("Selected")
				selectedItem = CSBigPromoFocus
			else if selectedItem == CSBackb
				CSReplayb.animate("Selected")
				CSBackb.animate("Unselected")
				selectedItem = CSReplayb
			else if selectedItem == CSBigPromoFocus
				BigPromoContainer.animate("fullscreen")
				CSBigPromoFocus.animate ("Unselected")
				CSBigPromoFocus2.animate ("Selected")
				BigPromoImage.animate("fullscreen")
				video2.animate("squeezeout")
				CSRightArrow.animate("invisible")
				selectedItem = CSBigPromoFocus2
			else if selectedItem == BigPromoImageSmall
				BigPromoImageSmall.animate("Unselected")
				RightPanelLastMoreFocus.animate("Selected")
				selectedItem = RightPanelLastMoreFocus

				
# Listen for LEFT arrow input
		when 37
			# While video is playing
			if selectedItem == PlayPauseVideoController and playerState == "play" 
				BackVideoController.animate("selected")
				PlayPauseVideoController.animate("pauseInactive")
				selectedItem = BackVideoController	
			# While video is paused
			else if selectedItem == PlayPauseVideoController and playerState == "paused" 
				BackVideoController.animate("selected")
				PlayPauseVideoController.animate("playInactive")
				selectedItem = BackVideoController
			else if selectedItem == Row1CInfo and playerState == "play"
				PlayPauseVideoController.animate("pauseFocus")
				Row1CInfo.animate("unselected")
				selectedItem = PlayPauseVideoController
			else if selectedItem == Row1CInfo and playerState == "paused"
				PlayPauseVideoController.animate("playFocus")
				Row1CInfo.animate("unselected")
				selectedItem = PlayPauseVideoController
			else if selectedItem == Row1DSubtitle
				Row1DSubtitle.animate("unselected")
				Row1CInfo.animate("selected")
				selectedItem = Row1CInfo
			else if selectedItem == WatchNextpisodeFocus
				WatchNextpisodeFocus.animate("unselected")
				Row1DSubtitle.animate("selected")
				selectedItem = Row1DSubtitle
			else if selectedItem == CatastropheFocus and AppState == "Normal"
				CatastropheFocus2.animate("Unselected")
				Controls.animate("unselected")
				RightPanelFirst.animate("unselected")
				video.player.play()
				selectedItem = Container
			else if selectedItem == FirstEpisodeFocus
				FirstEpisodeFocus.animate("unselected")
				Series1Focus.animate("selected")
				Series1Selected.animate("unselected")
				selectedItem = Series1Focus
			else if selectedItem == LastEpisodeFocus
				FirstEpisodeFocus.animate("unselected")
				LastEpisodeFocus.animate("unselected")
				Series2Focus.animate("selected")
				Series2Selected.animate("unselected")
				selectedItem = Series2Focus
			else if selectedItem == HomeFocus
				LeftMenu.animate("selected")
				HomeContent.animate("unselected")
				HomeFocus.animate("unselected")
				selectedItem = LeftMenu
			else if selectedItem == Series1Focus
				HomeFocus.animate("selected")
				BrandHub.animate("unselected")
				HomeContent.animate("selected")
				SeriesNavigation.animate("Series1")
				selectedItem = HomeFocus
			else if selectedItem == Series2Focus
				HomeFocus.animate("selected")
				BrandHub.animate("unselected")
				HomeContent.animate("selected")
				Series2Focus.animate("unselected")
				EpisodeList.animate("Series1")
				SeriesNavigation.animate("Series1")
				selectedItem = HomeFocus
			else if selectedItem == moreFocus
				moreFocus.animate("Unselected")
				CatastropheFocus.animate("Selected")
				selectedItem = CatastropheFocus
			else if selectedItem == CatastropheFocus2
				CatastropheFocus2.animate("Unselected")
				CatastropheFocus.animate("Selected")
				moreFocus.animate("Unselected")
				RightPanelFirst.animate("peeking")
				UpNextPanelElementsState1.animate("visible")
				UpNextPanelElementsState2.animate("invisible")
				RightPanelFirstContent1.animate("peeking")
				video.player.play()
				selectedItem = CatastropheFocus
			else if selectedItem == CSItemFocusa
				CSReplaya.animate("Selected")
				CSItemFocusa.animate("Unselected")
				selectedItem = CSReplaya
			else if selectedItem == CS1Morefocus
				CS1Morefocus.animate ("Unselected")
				CSItemFocusa.animate("Selected")
				selectedItem = CSItemFocusa
			else if selectedItem == CSReplaya
				CSBacka.animate("Selected")
				CSReplaya.animate("Unselected")
				selectedItem = CSBacka
			else if selectedItem == CSBigPromoFocus
				CSReplayb.animate("Selected")
				CSBigPromoFocus.animate("Unselected")
				selectedItem = CSReplayb
			else if selectedItem == CSReplayb
				CSReplayb.animate("Unselected")
				CSBackb.animate("Selected")
				selectedItem = CSBackb
				
				

				
			else if selectedItem == CSBigPromoFocus2

				BigPromoImage.animate("peeking")
				CSBigPromoFocus.animate("Selected")
				CSBigPromoFocus2.animate("Unselected")
				BigPromoContainer.animate("peeking")
				CSRightArrow.animate("visible")
				video2.animate("squeezeon")
				selectedItem = CSBigPromoFocus
			else if	selectedItem == CSItem2Focusa
				CSItemFocusa.animate("Selected")
				CS1Container.animate("peeking")
				video.animate("squeezeon")
				CS1UIelements.animate("visible")
				CS1Morefocus.animate("Unselected")
				CSItem2Focusa.animate("Unselected")
				selectedItem = CSItemFocusa
			else if selectedItem == RightPanelBigPromoFocus
				selectedItem = RightPanelLast
				RightPanelBigPromoFullscreenInfo.animate("Invisible")
				RightPanelGridLastEpisode.animate
					properties:
						x: 0 
					time: 0.3
					curve: "ease-out"
					delay: 0.6
				RightPanelGridLastEpisodeY.animate
					properties:
						y: 121
					time: 0.2
					curve: "ease-out"
					delay: 0.2
				RightPanelPeekingInfo.animate("Visible2")
				RightPanelBigPromoFocus.animate("Unselected")
# 				RightPanelGridLastEpisode.animate("peeking")
				RightPanelLast.animate("peeking2")
				WatchNextpisodeFocus.animate("unselected")
				BigPromoImageSmall.animate("Selected2")
				BigPromoBrandImage.animate("small")
				Controls.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				video2.player.play()
				Utils.delay 1, ->
					selectedItem = BigPromoImageSmall
			else if selectedItem == RightPanelLastMoreFocus
				BigPromoImageSmall.animate("Selected")
				RightPanelLastMoreFocus.animate("Unselected")
				selectedItem = BigPromoImageSmall
			else if selectedItem == BigPromoImageSmall
				RightPanelLast.animate("unselected")
				WatchNextpisodeFocus.animate("unselected")
				BigPromoImageSmall.animate("Selected")
				Controls.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				selectedItem = Container


			

			
# Listen for ENTER input
		when 13
			if selectedItem == LeftMenu 
				LeftMenu.animate("unselected")
				HomeContent.animate("selected")
				HomeFocus.animate("selected")
				selectedItem = HomeFocus
			else if selectedItem == HomeFocus
				BrandHub.animate("selected")
				HomeFocus.animate("unselected")
				HomeContent.animate ("hidden")
				Series1Focus.animate("selected")
				selectedItem = Series1Focus
			else if selectedItem == Series1Focus
				Series1Focus.animate("unselected")
				Series1Selected.animate("selected")
				FirstEpisodeFocus.animate("selected")
				selectedItem = FirstEpisodeFocus
			else if selectedItem == Series2Focus
				Series2Focus.animate("unselected")
				Series2Selected.animate("selected")
				LastEpisodeFocus.animate("selected")
				selectedItem = LastEpisodeFocus
			else if selectedItem == WatchNextpisodeFocus and AppState == "Normal" and videoPlaying == "FirstEpisode"
				RightPanelFirst.animate("peeking")
				Controls.animate("unselected")
				WatchNextpisodeFocus.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				CatastropheFocus.animate("FirstEpisode")
				CatastropheFocus.animate("Selected")
				selectedItem = CatastropheFocus
			else if selectedItem == WatchNextpisodeFocus and AppState == "Normal" and videoPlaying == "LastEpisode"
				RightPanelLast.animate("peeking")
				WatchNextpisodeFocus.animate("unselected")
				BigPromoImageSmall.animate("Selected")
				Controls.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				selectedItem = BigPromoImageSmall
			else if selectedItem == Container
				Controls.animate("selected")
				RightPanelFirst.animate("unselected")
				PlayPauseVideoController.animate("pauseFocus")
				selectedItem = PlayPauseVideoController
			else if selectedItem == FirstEpisodeFocus # First episode 
				VideoTitle.animate("FirstEpisode")
				watchNextThumb.animate("invisible")
				FirstEpisodeFocus.animate("selected")
				BrandHub.animate("selectedwatching")
				HomeContent.animate("hidden")
				Background.animate("hidden")
				video2.animate
					opacity: 0
				video.animate
					opacity: 1
				video.player.play()
				video.player.muted = false
				video.player.currentTime = 0 # Restarts the Video player
				playerState = "play"
				videoPlaying = "FirstEpisode"
				selectedItem = Container
			else if selectedItem == LastEpisodeFocus
				watchNextThumb.animate("visible")
				VideoTitle.animate("LastEpisode")
				FirstEpisodeFocus.animate("selected")
				BrandHub.animate("selectedwatching")
				HomeContent.animate("hidden")
				Background.animate("hidden")
				video.animate
					opacity: 0
				video2.animate
					opacity: 1
				video2.player.play()
				video2.player.muted = false
				video2.player.currentTime = 0 # Restarts the Video player
				playerState = "play"
				videoPlaying = "LastEpisode"
				selectedItem = Container
			else if selectedItem == BackVideoController and videoPlaying == "FirstEpisode"
				BrandHub.animate("selected")
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				Background.animate("visible")
				video.player.pause()
				selectedItem = FirstEpisodeFocus
			else if selectedItem == BackVideoController and videoPlaying == "LastEpisode"
				BrandHub.animate("selected")
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				Background.animate("visible")
				video2.player.pause()
				selectedItem = LastEpisodeFocus
			else if selectedItem == PlayPauseVideoController and playerState == "play" and videoPlaying == "FirstEpisode"
				video.player.pause()
				PlayPauseVideoController.animate("playFocus")
				playerState = "paused"
				selectedItem =PlayPauseVideoController	
			else if selectedItem == PlayPauseVideoController and playerState == "paused" and videoPlaying == "FirstEpisode"
				video.player.play()
				video.player.muted = false
				PlayPauseVideoController.animate("pauseFocus")
				playerState = "play"
				selectedItem = PlayPauseVideoController
			else if selectedItem == PlayPauseVideoController and playerState == "play" and videoPlaying == "LastEpisode"
				video2.player.pause()
				PlayPauseVideoController.animate("playFocus")
				playerState = "paused"
				selectedItem =PlayPauseVideoController	
			else if selectedItem == PlayPauseVideoController and playerState == "paused" and videoPlaying == "LastEpisode"
				video2.player.play()
				video2.player.muted = false
				PlayPauseVideoController.animate("pauseFocus")
				playerState = "play"
				selectedItem = PlayPauseVideoController
			else if selectedItem == moreFocus and AppState == "Normal" and videoPlaying == "FirstEpisode"
				RightPanelFirstContent1.animate("fullscreen")
				video.player.pause()
				RightPanelFirst.animate("fullscreen")
				UpNextPanelElementsState1.animate("invisible")
				UpNextPanelElementsState2.animate("visible")
				moreFocus.animate("Unselected")
				CatastropheFocus2.animate("FirstEpisode")
				CatastropheFocus2.animate("Selected")
				selectedItem = CatastropheFocus2
				
				
				
			else if selectedItem == RightPanelLastMoreFocus
				selectedItem = RightPanelLast
				RightPanelLast.animate("fullscreen")
				RightPanelLastMoreFocus.animate("Unselected")
				RightPanelGridLastEpisode.animate
					properties:
						x: 125 
					time: 0.4
					curve: "ease-out"
				RightPanelGridLastEpisodeY.animate
					properties:
						y: 405
					time: 0.7
					curve: "ease-out"
					delay: 0.6
# 				RightPanelGridLastEpisode.animate("fullscreen")
				BigPromoBrandImage.animate("big")
				RightPanelBigPromoFocus.animate("Selected")
				RightPanelBigPromoFullscreenInfo.animate("Visible")
				RightPanelPeekingInfo.animate("Invisible")
				video2.player.pause()
				Utils.delay 1.5, ->
					selectedItem = RightPanelBigPromoFocus
# 				selectedItem = RightPanelBigPromoFocus
				
			else if selectedItem == moreFocus and AppState == "Normal" and videoPlaying == "LastEpisode"
				moreFocus.animate("Unselected")
				CatastropheFocus2.animate("LastEpisode")
				CatastropheFocus2.animate("Selected")
				selectedItem = CatastropheFocus2
			else if selectedItem == CSBacka
				CSBacka.animate("Unselected")
				video.animate
					properties:
						opacity: 0
					delay: 0
					time: 0
				video.player.pause()
				BrandHub.animate("selected")
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				Background.animate("visible")
				CS1Container.animate("hide")
				CSItemFocusa.animate("Selected")
				video.animate
					properties:
						scale: 1
						originX: 0
				CreditSqueeze = "none"
				AppState = "Normal"
				selectedItem = FirstEpisodeFocus
			else if selectedItem == CSBackb
				video2.animate
					properties:
						opacity: 0
					delay: 0
					time: 0
				CSBackb.animate("Unselected")
				video2.player.pause()
				BrandHub.animate("selected")
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				Background.animate("visible")
				BigPromoContainer.animate("hide")
				CreditSqueeze = "none"
				CSBigPromoFocus.animate("Selected")
				video2.animate
					properties:
						scale: 1
						originX: 0
				AppState = "Normal"
				selectedItem = LastEpisodeFocus
			else if selectedItem == CS1Morefocus
				CSEpisodeAutoplay.animate("Disabled")
				CS1Container.animate("fullscreen")
				video.animate("squeezeout")
				CS1UIelements.animate("hidden")
				CS1Morefocus.animate("Unselected")
				CSItem2Focusa.animate("Selected")
				selectedItem = CSItem2Focusa
			else if selectedItem == CSReplaya
				CSReplaya.animate("Unselected")
				video.player.currentTime = 0
				video.player.play()
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				CS1Container.animate("hide")
				CSItemFocusa.animate("Selected")
				video.animate
					properties:
						scale: 1
						originX: 0
				CreditSqueeze = "none"
				AppState = "Normal"
				selectedItem = Container
			else if selectedItem == CSReplayb
				video2.player.currentTime = 0
				video2.player.play()
				CSReplayb.animate("Unselected")
				Controls.animate("unselected")
				BackVideoController.animate("unselected")
				BigPromoContainer.animate("hide")
				CreditSqueeze = "none"
				CSBigPromoFocus.animate("Selected")
				video2.animate
					properties:
						scale: 1
						originX: 0
				AppState = "Normal"
				selectedItem = Container
				
				
# Listen for DOWN arrow input
		when 40
			if selectedItem == Series1Focus
				Series1Focus.animate("unselected")
				Series2Focus.animate("selected")
				EpisodeList.animate("Series2")
				SeriesNavigation.animate("Series2")
				selectedItem = Series2Focus
				
# Listen for UP arrow input
		when 38
			if selectedItem == Series2Focus
				Series1Focus.animate("selected")
				Series2Focus.animate("unselected")
				EpisodeList.animate("Series1")
				SeriesNavigation.animate("Series1")
				selectedItem = Series1Focus
				
# Listen for cha nge to SPACE (ALT 18)input  for skipping to the start of the video and to the credit squeeze
		when 32
			if videoPlaying == "FirstEpisode" and AppState == "Normal"
					video.player.currentTime = 614 #600 Jump to end of video to launch credit squeeze
			if videoPlaying == "LastEpisode" and AppState == "Normal"
					video2.player.currentTime = 615 # Jump to end of video to launch credit squeeze
# Listen for 16 shift (CTRL 17) input
		when 16
			if videoPlaying == "FirstEpisode" and AppState == "Normal"
					video.player.currentTime = 0 # Restarts the Video player
					video.player.play()
			if videoPlaying == "LastEpisode" and AppState == "Normal"
					video2.player.currentTime = 0 # Restarts the Video player
					video2.player.play()
				


CSFirstEpisodeImage = new Layer
	parent: video
	image: "images/CSFirstEpisodeImage.png"
	width: 1280
	height: 720
	opacity: 0
	
CSFirstEpisodeImage.states.visible =
	opacity: 1
CSFirstEpisodeImage.states.invisible =
	opacity: 0

CSLastEpisodeImage = new Layer
	parent: video2
	image: "images/CSLastEpisodeImage.png"
	width: 1280
	height: 720
	opacity: 0

CSLastEpisodeImage.states.visible =
	opacity: 1
CSLastEpisodeImage.states.invisible =
	opacity: 0

video.on "video:ended", ->
	if videoPlaying == "FirstEpisode"
		CSFirstEpisodeImage.animate("visible")
	
video2.on "video:ended", ->	
	if videoPlaying == "LastEpisode"
		CSLastEpisodeImage.animate("visible")

video.on "video:pause", ->
	if videoPlaying == "FirstEpisode"
		CSFirstEpisodeImage.animate("invisible")
	
video2.on "video:pause", ->	
	if videoPlaying == "LastEpisode"
		CSLastEpisodeImage.animate("invisible")
		
video.on "video:play", ->
	if videoPlaying == "FirstEpisode"
		CSFirstEpisodeImage.animate("invisible")
	
video2.on "video:play", ->	
	if videoPlaying == "LastEpisode"
		CSLastEpisodeImage.animate("invisible")









