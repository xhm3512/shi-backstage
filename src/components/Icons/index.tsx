import React, { ComponentType, SVGProps } from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import SortUpSvg from './SortUp';
import SortDownSvg from './SortDown';
import QuestionIMg from './Question';
import AccountExitCustom from './AccountExitCustom';
import Administration from './Administration';
import MyCustom from './MyCustom';
import DeleteSvg from './Delete';
import PreviewSvg from './Preview';
import PreviewHiddenSvg from './PreviewHidden';
import EditorSvg from './Editor';
import EditorSvg2 from './Editor2';
import SoundSvg from './Sound';
import NextSvg from './Next';
import PreSvg from './Pre';
import SwitchSvg from './Switch';


const CustomIcon =
  (
    Component: ComponentType<
      CustomIconComponentProps | SVGProps<SVGSVGElement>
    >,
  ) =>
  (props: any) => {
    return <Icon component={Component} {...props}></Icon>;
  };
const DeleteCus = CustomIcon(DeleteSvg);
const Preview = CustomIcon(PreviewSvg);
const PreviewHidden = CustomIcon(PreviewHiddenSvg);
const Editor = CustomIcon(EditorSvg);
const Editor2 = CustomIcon(EditorSvg2);
const SortUp = CustomIcon(SortUpSvg);
const SortDown = CustomIcon(SortDownSvg);
const Sound = CustomIcon(SoundSvg);
const NextCustom = CustomIcon(NextSvg);
const PreCustom = CustomIcon(PreSvg);
const SwitchCustom = CustomIcon(SwitchSvg);

export {
  QuestionIMg,
  MyCustom,
  AccountExitCustom,
  DeleteCus,
  Preview,
  Editor,
  Editor2,
  SortUp,
  SortDown,
  Administration,
  Sound,
  PreviewHidden,
  NextCustom,
  PreCustom,
  SwitchCustom,
};
