import joi from "joi";

const RESULT_SCHEMA = joi
  .object({
    acc: joi.number().min(75).max(100).required(),
    afkDuration: joi.number().min(0).required(),
    bailedOut: joi.boolean().required(),
    blindMode: joi.boolean().required(),
    challenge: joi.string(),
    charStats: joi.array().items(joi.number().min(0)).required(),
    charTotal: joi.number().min(0),
    chartData: joi
      .alternatives()
      .try(
        joi.object({
          wpm: joi.array().items(joi.number().min(0)).required(),
          raw: joi.array().items(joi.number().min(0)).required(),
          err: joi.array().items(joi.number().min(0)).required(),
        }),
        joi.string().valid("toolong")
      )
      .required(),
    consistency: joi.number().min(0).max(100).required(),
    customText: joi.object({
      textLen: joi.number().required(),
      isWordRandom: joi.boolean().required(),
      isTimeRandom: joi.boolean().required(),
      word: joi.number().allow(null),
      time: joi.number().allow(null),
    }),
    difficulty: joi.string().valid("normal", "expert", "master").required(),
    funbox: joi.string().required(),
    hash: joi.string().required(),
    incompleteTestSeconds: joi.number().min(0).required(),
    incompleteTests: joi
      .array()
      .items(
        joi.object({
          acc: joi.number().min(0).max(100).required(),
          seconds: joi.number().min(0).required(),
        })
      )
      .required(),
    keyConsistency: joi.number().min(0).required(),
    keyDuration: joi
      .alternatives()
      .try(
        joi.array().items(joi.number().min(0)),
        joi.string().valid("toolong")
      ),
    keySpacing: joi
      .alternatives()
      .try(
        joi.array().items(joi.number().min(0)),
        joi.string().valid("toolong")
      ),
    keyOverlap: joi.number().min(0),
    lastKeyToEnd: joi.number().min(0),
    startToFirstKey: joi.number().min(0),
    lang: joi.string(),
    stringified: joi.string(),
    language: joi.string().required(),
    lazyMode: joi.boolean().required(),
    mode: joi
      .string()
      .valid("time", "words", "quote", "zen", "custom")
      .required(),
    mode2: joi.string().required(),
    numbers: joi.boolean().required(),
    punctuation: joi.boolean().required(),
    quoteLength: joi.number(),
    rawWpm: joi.number().min(0).max(420).required(),
    restartCount: joi.number().required(),
    smoothConsistency: joi.number().optional(), // to be removed
    tags: joi
      .array()
      .items(joi.string().regex(/^[a-f\d]{24}$/i))
      .required(),
    testDuration: joi.number().required().min(1),
    timestamp: joi.date().timestamp().required(),
    uid: joi.string().required(),
    wpm: joi.number().min(0).max(420).required(),
    wpmConsistency: joi.number().min(0).required(),
  })
  .required();

export default RESULT_SCHEMA;
