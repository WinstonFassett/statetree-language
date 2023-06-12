import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';
import monarchSyntax from "../../syntaxes/statetree.monarch";
import example from '../../example/trafficlight.statetree?raw'


monaco.languages.register({ id: 'statetree' })
monaco.languages.setMonarchTokensProvider('statetree', monarchSyntax)
console.log('monaco', monaco)

export const Editor: VFC = () => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl) {
			setEditor((editor) => {
				if (editor) return editor;
        
				return monaco.editor.create(monacoEl.current!, {
					value: example,
					language: 'statetree',
          readOnly: false,
	        theme: "vs-dark",
				});
			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	return <div className={styles.Editor} ref={monacoEl}></div>;
};
