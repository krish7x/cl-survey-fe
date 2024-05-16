'use client';

import Select from '@/components/micros/select';
import { templateJSONData } from '@/constants/survey';
import { IOptions, ITemplateQuestion } from '@/types';
import { Button, Textarea } from 'flowbite-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';

import caratlanelogo from '../../public/caratlane.svg';

export default function Survey() {
  const [questions, setQuestions] =
    useState<ITemplateQuestion[]>(templateJSONData);
  const [currentQuestion, setCurrentQuestion] = useState<ITemplateQuestion>(
    templateJSONData[0],
  );
  const [showThanksScreen, setShowThanksScreen] = useState(false);

  const showFooter = useMemo(() => {
    const optionTypeId = currentQuestion.optionTypeId;
    return optionTypeId === 4 || optionTypeId === 6;
  }, [currentQuestion]);

  const disabled = useMemo(() => {
    const optionTypeId = currentQuestion.optionTypeId;
    if (optionTypeId === 4) return !currentQuestion.answer.length;
    if (optionTypeId === 6)
      return !(currentQuestion.answer[0] as string)?.length;
  }, [currentQuestion]);

  const setStateValue = useCallback(
    (value: Array<string | number>) => {
      const clone = [...questions];
      const curIndex = questions.findIndex(
        val => val.questionId === currentQuestion.questionId,
      );
      clone[curIndex] = {
        ...currentQuestion,
        answer: value,
      };
      setQuestions(clone);
      setCurrentQuestion({
        ...currentQuestion,
        answer: value,
      });
    },
    [currentQuestion, questions],
  );

  const onSelectOption = useCallback(
    (inx: number | string, maxSelect: number) => {
      if ((currentQuestion.answer || [])?.length < maxSelect) {
        //select
        if (!currentQuestion.answer.includes(inx)) {
          //add
          const value = [...currentQuestion.answer, inx];
          setStateValue(value);
        } else {
          //remove
          const value = currentQuestion.answer.filter(val => val !== inx);
          setStateValue(value);
        }
        //de-select
      } else {
        const value = [...(currentQuestion?.answer?.slice(1) || []), inx];
        setStateValue(value);
      }

      //single select
      if (maxSelect === 1) {
        const curIndex = questions.findIndex(
          val => val.questionId === currentQuestion.questionId,
        );
        if (curIndex !== questions.length - 1) {
          setTimeout(() => {
            setCurrentQuestion(questions[curIndex + 1]);
          }, 300);
        } else {
          setShowThanksScreen(true);
        }
      }
    },
    [
      currentQuestion.answer,
      currentQuestion.questionId,
      questions,
      setStateValue,
    ],
  );

  const onContinue = useCallback(() => {
    const curIndex = questions.findIndex(
      val => val.questionId === currentQuestion.questionId,
    );
    if (curIndex !== questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(questions[curIndex + 1]);
      }, 300);
    } else {
      setShowThanksScreen(true);
    }
  }, [currentQuestion.questionId, questions]);

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(117.39%_169.54%_at_-3.2%_-1.87%,_rgba(255,_246,_200,_0.70)_0%,_rgba(255,_215,_245,_0.70)_21.81%,_rgba(243,_241,_255,_0.80)_50%,_#F8EBFB_100%)]">
      <div
        className={`flex size-full flex-col items-center md:items-start ${!showThanksScreen && 'gap-[calc(80px)]'} p-8`}
      >
        <Image
          src={caratlanelogo}
          alt={'caratlane_logo'}
          width={162}
          height={48}
          className="md:absolute md:left-[calc(50%-64px)]"
        />
        <AnimatePresence>
          <motion.div
            className={`${showFooter && 'pb-24'} md:mt-[calc(10%)] md:w-2/5 md:pl-24`}
            key={currentQuestion.questionId}
            layout
            animate={{
              opacity: 1,
            }}
            transition={{
              opacity: { ease: 'linear' },
              layout: { duration: 0.5 },
              ease: 'linear',
            }}
          >
            {!showThanksScreen && (
              <div className="flex flex-col gap-10">
                <h2 className="text-xl font-semibold text-custom-8">
                  {currentQuestion.title}
                </h2>
                {(currentQuestion.optionTypeId === 3 ||
                  currentQuestion.optionTypeId === 4) && (
                  <Select
                    options={currentQuestion.optionsJson?.options as IOptions[]}
                    selectedOptions={currentQuestion?.answer || []}
                    maxSelect={
                      currentQuestion.optionTypeId === 3
                        ? 1
                        : currentQuestion.optionsJson?.options?.length || 1
                    }
                    onChange={(inx, maxSelect) =>
                      onSelectOption(inx, maxSelect)
                    }
                  />
                )}
                {currentQuestion.optionTypeId === 6 && (
                  <Textarea
                    id="txt-template-description"
                    placeholder="Write here..."
                    value={currentQuestion.answer[0]}
                    onChange={event => setStateValue([event.target.value])}
                    className="h-[calc(200px)] border-custom-7 p-3 text-base"
                    required
                  />
                )}

                {showFooter && !showThanksScreen && (
                  <Button
                    id="btn-continue"
                    className="h-[calc(56px)] w-40 items-center bg-custom-10 focus:ring-0 enabled:hover:bg-custom-10 max-sm:hidden"
                    disabled={disabled}
                    onClick={onContinue}
                  >
                    <p className="text-base font-semibold">CONTINUE</p>
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        {showThanksScreen && (
          <AnimatePresence>
            <motion.div
              className="md:absolute md:left-[calc(42%)] md:top-[calc(25%)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
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
        )}
        {showFooter && !showThanksScreen && (
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
        )}
      </div>
    </div>
  );
}
