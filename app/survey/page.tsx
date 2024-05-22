'use client';

import Select from '@/components/micros/select';
import { templateJSONData } from '@/constants/survey';
import { ILinkedHash, IOptions, ITemplateQuestion } from '@/types';
import { Button, Textarea } from 'flowbite-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

import caratlanelogo from '../../public/caratlane.svg';

export default function Survey() {
  //states
  const [questions, setQuestions] =
    useState<ITemplateQuestion[]>(templateJSONData);
  const [currentQuestions, setCurrentQuestions] = useState<ITemplateQuestion[]>(
    [templateJSONData[0]],
  );
  const [showThanksScreen, setShowThanksScreen] = useState(false);
  const [linkedHash, setLinkedHash] = useState<ILinkedHash>();

  //memos
  const showFooter = useMemo(() => {
    return (
      currentQuestions.some(
        q => q.optionTypeId === 4 || q.optionTypeId === 6,
      ) || currentQuestions.length > 1
    );
  }, [currentQuestions]);

  const disabled = useMemo(() => {
    return currentQuestions.some(q => {
      if (q.optionTypeId === 3 || q.optionTypeId === 4) return !q.answer.length;
      if (q.optionTypeId === 6) return !(q.answer[0] as string)?.length;
      return false;
    });
  }, [currentQuestions]);

  //callbacks
  const setStateValue = useCallback(
    (answer: Array<string | number>, questionIndex?: number) => {
      if (questionIndex !== undefined) {
        const currentQuestion = currentQuestions[questionIndex];
        const currentIndex = questions.findIndex(
          val => val.questionId === currentQuestion.questionId,
        );
        const questionClone = [...questions];
        const currentQuestionsClone = [...currentQuestions];
        currentQuestionsClone[questionIndex] = {
          ...currentQuestion,
          answer,
        };
        questionClone[currentIndex] = {
          ...currentQuestion,
          answer,
        };
        setCurrentQuestions(currentQuestionsClone);
        setQuestions(questionClone);
      }
    },
    [currentQuestions, questions],
  );

  const onSelectOption = useCallback(
    (
      inx: number | string,
      maxSelect: number,
      linkedTo?: number | string,
      questionIndex?: number,
    ) => {
      if (questionIndex !== undefined && currentQuestions?.length) {
        const currentQuestion = currentQuestions[questionIndex];
        //if answer not already present
        if (!currentQuestion.answer.includes(inx)) {
          //single select
          if (currentQuestion.optionTypeId === 3) {
            //only one shoould be present
            if (!currentQuestion.answer.length) {
              //add
              const value = [...currentQuestion.answer, inx];
              const hash = {
                ...linkedHash,
                [`${questionIndex}_${inx}`]: linkedTo,
              };
              setStateValue(value, questionIndex);
              setLinkedHash(hash);
            } else {
              //remove
              if (currentQuestion.answer.includes(inx)) {
                const value = currentQuestion.answer.filter(val => val !== inx);
                const hash = { ...linkedHash };
                delete hash[inx];
                setStateValue(value, questionIndex);
                setLinkedHash(hash);
              } else {
                //replace
                const value = [...currentQuestion.answer.slice(+inx, 1), inx];
                const hash = { ...linkedHash };
                delete hash[inx];
                setStateValue(value, questionIndex);
                setLinkedHash(hash);
              }
            }
          }
          //multi select
          else {
            //add
            const value = [...currentQuestion.answer, inx];
            const hash = {
              ...linkedHash,
              [`${questionIndex}_${inx}`]: linkedTo,
            };
            setStateValue(value, questionIndex);
            setLinkedHash(hash);
          }
        } else {
          //remove
          const value = currentQuestion.answer.filter(val => val !== inx);
          const hash = { ...linkedHash };
          delete hash[inx];
          setStateValue(value, questionIndex);
          setLinkedHash(hash);
        }

        //proceed to next screen for single select
        if (maxSelect === 1 && currentQuestions?.length === 1) {
          const curIndex = questions.findIndex(
            val => val.questionId === currentQuestion.questionId,
          );
          if (curIndex !== questions.length - 1) {
            setTimeout(() => {
              if (linkedTo) {
                const curQuestion = questions.find(
                  val => val.questionId === linkedTo,
                );
                if (curQuestion) {
                  setCurrentQuestions([curQuestion]);
                  return;
                }
              }
              setCurrentQuestions([questions[questions.length - 1]]);
            }, 300);
          } else {
            setShowThanksScreen(true);
          }
        }
      }
    },
    [currentQuestions, linkedHash, questions, setStateValue],
  );

  const onContinue = useCallback(() => {
    const tempQuestion: ITemplateQuestion[] = [];
    currentQuestions.forEach((question, index) => {
      const currentIndex = questions.findIndex(
        val => val.questionId === question.questionId,
      );
      if (currentIndex !== questions.length - 1) {
        const currentQuestion: ITemplateQuestion = questions[currentIndex];
        currentQuestion.answer.forEach((val: string | number) => {
          const linkedTo = linkedHash ? linkedHash[`${index}_${val}`] : false;
          const nextQuestion = questions.find(
            val => val.questionId === linkedTo,
          );
          if (nextQuestion) {
            tempQuestion.push(nextQuestion);
          }
        });
      } else {
        setShowThanksScreen(true);
      }
      setTimeout(() => {
        if (!tempQuestion.length) {
          setCurrentQuestions([questions[questions.length - 1]]);
          return;
        }
        setCurrentQuestions(tempQuestion);
        setLinkedHash({});
      }, 300);
    });
  }, [currentQuestions, linkedHash, questions]);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(117.39%_169.54%_at_-3.2%_-1.87%,_rgba(255,_246,_200,_0.70)_0%,_rgba(255,_215,_245,_0.70)_21.81%,_rgba(243,_241,_255,_0.80)_50%,_#F8EBFB_100%)]">
      <div
        className={`flex size-full  flex-col items-center md:items-start ${!showThanksScreen && 'gap-[calc(80px)]'} p-8`}
      >
        <Image
          src={caratlanelogo}
          alt={'caratlane_logo'}
          width={162}
          height={48}
          className="md:absolute md:left-[calc(50%-64px)]"
        />
        <AnimatePresence mode="wait">
          <motion.div
            className={`${showFooter && 'pb-24'} w-full md:mt-[calc(10%)] md:w-2/5 md:pl-24`}
            key={currentQuestions[0].questionId}
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              type: 'spring',
              opacity: { ease: 'linear' },
              layout: { duration: 0.8 },
            }}
          >
            {!showThanksScreen ? (
              <div className="flex flex-col gap-10">
                {currentQuestions?.length
                  ? currentQuestions.map((val, index) => (
                      <>
                        <h2 className="text-xl font-semibold text-custom-8">
                          {val.title}
                        </h2>
                        {(val.optionTypeId === 3 || val.optionTypeId === 4) && (
                          <Select
                            options={val.optionsJson?.options as IOptions[]}
                            selectedOptions={val?.answer || []}
                            maxSelect={
                              val.optionTypeId === 3
                                ? 1
                                : val.optionsJson?.options?.length || 1
                            }
                            onChange={(inx, maxSelect, linkedTo) =>
                              onSelectOption(inx, maxSelect, linkedTo, index)
                            }
                          />
                        )}
                        {val.optionTypeId === 6 && (
                          <Textarea
                            id="txt-template-description"
                            placeholder="Write here..."
                            value={val.answer[0]}
                            onChange={event =>
                              setStateValue([event.target.value], index)
                            }
                            className="h-[calc(200px)] border-custom-7 p-3 text-base"
                            required
                          />
                        )}
                      </>
                    ))
                  : null}
                {showFooter && !showThanksScreen ? (
                  <Button
                    id="btn-continue"
                    className="h-[calc(56px)] w-40 items-center bg-custom-10 focus:ring-0 enabled:hover:bg-custom-10 max-sm:hidden"
                    disabled={disabled}
                    onClick={onContinue}
                  >
                    <p className="text-base font-semibold">CONTINUE</p>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>

        {showThanksScreen ? (
          <AnimatePresence mode="wait">
            <motion.div
              className="md:absolute md:left-[calc(42%)] md:top-[calc(25%)]"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col gap-2">
                  <h1 className="text-[calc(44px)] font-semibold leading-10 text-custom-8">
                    Thank You !
                  </h1>
                  <p className="text-lg font-medium text-custom-8">
                    We appreciate your feedback.
                  </p>
                </div>
                <Image
                  src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/oneview_banner_CL_Survey.png"
                  alt={'thanks_screen'}
                  width={326}
                  height={175}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : null}

        {showFooter && !showThanksScreen ? (
          <AnimatePresence mode="wait">
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                opacity: { ease: 'easeIn' },
                layout: { duration: 2 },
              }}
            >
              <div className="fixed bottom-0 left-0 right-0 z-10  bg-white px-8 py-4 shadow-[0px_-4px_24px_0px_rgba(0,0,0,0.25)] md:hidden">
                <Button
                  id="btn-continue"
                  className="h-[calc(56px)] w-full items-center bg-custom-10 focus:ring-0 enabled:hover:bg-custom-10"
                  disabled={disabled}
                  onClick={onContinue}
                >
                  <p className="text-base font-semibold">CONTINUE</p>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  );
}
