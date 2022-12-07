iosAdd:
	ionic capacitor add ios
iosCopy:
	ionic capacitor copy ios

iosRun:
	ionic capacitor run ios -l external

iosAddSplashScreen:
	npm install @capacitor/splash-screen
	npx cap sync

# iosRun:
# 	ionic genetate service api/translation