import type { Schema, Struct } from '@strapi/strapi';

export interface KagelKagelTime extends Struct.ComponentSchema {
  collectionName: 'components_kagel_kagel_times';
  info: {
    description: '';
    displayName: 'kagelContent';
    icon: 'walk';
  };
  attributes: {
    gap: Schema.Attribute.Integer;
    serial: Schema.Attribute.String;
    times: Schema.Attribute.Component<'kagel.squizz-and-stop', true>;
  };
}

export interface KagelSquizzAndStop extends Struct.ComponentSchema {
  collectionName: 'components_kagel_squizz_and_stops';
  info: {
    displayName: 'squizzAndStop';
    icon: 'volumeMute';
  };
  attributes: {
    squizz: Schema.Attribute.Integer;
    stop: Schema.Attribute.Integer;
  };
}

export interface QuizQuizContent extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quiz_contents';
  info: {
    description: '';
    displayName: 'quiz-content';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    options: Schema.Attribute.Component<'quiz.quizz-options', false>;
    question: Schema.Attribute.Text;
    serial: Schema.Attribute.Integer;
  };
}

export interface QuizQuizzOptions extends Struct.ComponentSchema {
  collectionName: 'components_quiz_quizz_options';
  info: {
    displayName: 'quizz-options';
  };
  attributes: {
    opiotn1: Schema.Attribute.Text;
    option3: Schema.Attribute.Text;
    optoin2: Schema.Attribute.Text;
    optoin4: Schema.Attribute.Text;
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
