.PHONY: test
test:
	parallelshell 'http-server -c-1' 'phantomjs -w' 'gemini-gui test/screenshot'