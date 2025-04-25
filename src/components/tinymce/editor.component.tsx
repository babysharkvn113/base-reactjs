import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react';
import { fullTinyMceConfig } from './config';
import MediaTinyMcePlugin from './plugins/media';
// import MediaTinyMcePlugin from './plugins/mediaTinyMcePlugin';
// import usePopupStore from '@/stores/popupStore';
// import ListMediaComponent, { IMedia, TMedia } from '@/components/media/listMedia';
// import { fullTinyMceConfig } from './tinymce.configs';

const TinyMCEEditor = ({
    height = 500,
    content,
    onContentChange,
}: {
    height?: number;
    content: string;
    onContentChange: (newContent: string) => void;
}) => {
    // Specify the type for the editorRef (TinyMCE Editor instance)
    const editorRef = useRef<Editor['editor'] | null>(null);

    //   const { setActived, setContent, setUnActived } = usePopupStore();

    //   const handleImageSelect = (selectedImages: IMedia[]): void => {
    //     const editor = editorRef.current;
    //     if (editor && selectedImages.length > 0) {
    //       selectedImages.forEach((item:IMedia) =>{
    //         if(item.type === TMedia.IMAGE){
    //           editor.insertContent(`<img src="${item.url}" alt="Image" />`);
    //         }

    //       })

    //     }
    //     setUnActived();
    //   };

    //   const handlePopup = (): void => {
    //     setActived();
    //     setContent(
    //       <ListMediaComponent handleSelectMedia={(medias: IMedia[]) => handleImageSelect(medias)} />
    //     );
    //   };

    const handlePopup = (): void => { }
    return (
        <Editor
            tinymceScriptSrc="/assets/js/tinymce/tinymce.min.js"
            licenseKey="gpl"
            onInit={(_, editor) => {
                editorRef.current = editor;
                MediaTinyMcePlugin(editor, handlePopup); // Register the custom plugin
            }}
            value={content} // Bind parent content via props
            onEditorChange={onContentChange} // Notify parent of changes
            init={{
                height,
                ...fullTinyMceConfig
            }}
        />
    );
};

export default TinyMCEEditor;
