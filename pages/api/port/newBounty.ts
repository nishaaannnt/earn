import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type { NextApiRequest, NextApiResponse } from 'next';

import type { Skills } from '@/interface/skills';
import { SkillList } from '@/interface/skills';
import { prisma } from '@/prisma';

dayjs.extend(relativeTime);

export default async function user(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const bounties = await prisma.bounties.findMany({});
    const updateData: {
      id: string;
      newSkills: Skills;
    }[] = [];
    bounties.forEach((element) => {
      const newSkills: { id: string; skill: string[] }[] = [];
      const skillNumber: string[] = [];
      element.skills?.split(',').forEach((skill) => {
        const skills = SkillList.find((e) => e.variations.includes(skill));
        if (skills && !skillNumber.includes(skills.mainskill)) {
          skillNumber.push(skills.mainskill);
        }
        newSkills.push({
          id: element.id,
          skill: skillNumber,
        });
      });

      // eslint-disable-next-line @typescript-eslint/no-shadow
      newSkills.forEach((element) => {
        updateData.push({
          id: element.id,
          newSkills: element.skill.map((el) => {
            const a = SkillList.find((e) => e.mainskill === el);

            return {
              skills: a?.mainskill!,
              subskills: a?.subskills!,
            };
          }),
        });
      });
    });
    updateData.forEach(async (element, i) => {
      await prisma.bounties.update({
        data: {
          newSkills: element.newSkills,
        },
        where: {
          id: element.id,
        },
      });
      console.log('Successfully udpate', i);
    });
    res.status(200).json(updateData.length);
  } catch (error) {
    console.log('file: create.ts:29 ~ user ~ error:', error);
    res.status(400).json({
      error,
      message: 'Error occurred while adding a new sponsor.',
    });
  }
}
