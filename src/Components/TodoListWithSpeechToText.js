import { createContext, useContext, useState } from 'react'
import SpeechRecognition , {useSpeechRecognition} from 'react-speech-recognition'



// let recognition = null;
// if ("webkitSpeechRecognition" in window) {
// 	recognition = new window.webkitSpeechRecognition();
// 	recognition.continous = true;
// 	recognition.lang = 'en-US'
// }

const speechContext = createContext(undefined);



export const TodoListWithSpeechToText = ( {children} ) => {
	const [timeoutId, setTimeoutId] = useState(null);
	const {
		transcript,
		// listening,
		resetTranscript,
		browserSupportsSpeechRecognition} = useSpeechRecognition()

		
  // const [isListening, setIsListening] = useState(false);

	// useEffect (() =>{

	// 	if (!recognition){
	// 		return;
	// 	}

	// 	recognition.onerror = (event) => {
	// 		console.log ("speech recognition error:", event.error)
	// 	}

	// }, [setText, setIsListening])


	//Start Speech recognition
	const startListening = () => {
		if (browserSupportsSpeechRecognition) {
			resetTranscript()
			SpeechRecognition.startListening({continuous: true})
			resetAutoStopTimer()
		} else{
			return console.log('not supported');
		}
		
	};

	const autoStopListening = () => {
		SpeechRecognition.stopListening()
	}

	const resetAutoStopTimer = () => {
		clearAutoStopTimer();
		const id = setTimeout(autoStopListening, 10000);
		setTimeoutId(id);

	}

	const clearAutoStopTimer= () =>{
		if(timeoutId) {
			const id = null;
		setTimeoutId(id)
		}
		
	}

// 	 const stopListening = () => {
// 	 	setIsListening(false);
// 	 	recognition.stop();
//  }


	return (
		<speechContext.Provider
			value={{
				transcript,
				startListening,
				resetTranscript,
			}}>
				{children}
			</speechContext.Provider>
	)
	 }

export const useSpeechContext = () => useContext(speechContext);