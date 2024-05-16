export interface IProject {
  id: number;
  projectName: string;
  userId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}
export interface ITemplate {
  id: number;
  templateName: string;
  description: string;
  templateJsonData?: ITemplateQuestion[];
  createdAt: string;
  updatedAt: string;
}

export interface IContact {
  id: number;
  name: string;
  emailId: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFetchSurvey {
  id: number;
  contactId: number;
  contactEmailId: string;
  surveyUrl: string;
  uuid: string;
  metaData: string;
  isEmailSent: boolean;
  isSurveyCompleted: boolean;
  createdAt: string;
  updatedAt: string;
  project: IProject;
  template: ITemplate;
  contact: IContact;
}

export interface IOptionJson {
  optionPosition: string;
  options: IOptions[];
}

export interface ITemplateQuestion {
  title: string;
  questionId?: number;
  description: string;
  optionTypeId: number | string;
  optionTypeName?: string;
  optionsJson?: IOptionJson;
  isAdded?: boolean;
  rating?: number;
  answer: Array<number | string>;
}

export interface IOptions {
  id: number | string;
  name: string;
  linkedTo?: number | string;
}
