import type { Schema, Struct } from '@strapi/strapi';

export interface KagelKagelTime extends Struct.ComponentSchema {
  collectionName: 'components_kagel_kagel_times';
  info: {
    description: '';
    displayName: 'kagelContent';
    icon: 'walk';
  };
  attributes: {
    gap: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<30>;
    serial: Schema.Attribute.String & Schema.Attribute.Required;
    times: Schema.Attribute.Component<'kagel.squizz-and-stop', true> &
      Schema.Attribute.Required;
  };
}

export interface KagelSquizzAndStop extends Struct.ComponentSchema {
  collectionName: 'components_kagel_squizz_and_stops';
  info: {
    description: '';
    displayName: 'squizzAndStop';
    icon: 'volumeMute';
  };
  attributes: {
    squizz: Schema.Attribute.Integer & Schema.Attribute.Required;
    stop: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface QuizQuizContent extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_contents';
  info: {
    description: '';
    displayName: 'quiz-content';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    options: Schema.Attribute.Component<'quiz.quizz-options', false> &
      Schema.Attribute.Required;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
    serial: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface QuizQuizzOptions extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quizz_options';
  info: {
    description: '';
    displayName: 'quizz-options';
  };
  attributes: {
    opiotn1: Schema.Attribute.String & Schema.Attribute.Required;
    option3: Schema.Attribute.String & Schema.Attribute.Required;
    optoin2: Schema.Attribute.String & Schema.Attribute.Required;
    optoin4: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'kagel.kagel-time': KagelKagelTime;
      'kagel.squizz-and-stop': KagelSquizzAndStop;
      'quiz.quiz-content': QuizQuizContent;
      'quiz.quizz-options': QuizQuizzOptions;
    }
  }
}
