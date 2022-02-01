import FluorineClient from '@classes/Client';
import { ContextMenuCommandBuilder } from '@discordjs/builders';
import { ApplicationCommandType } from 'discord-api-types';
import { UserContextMenuInteraction } from 'discord.js';
import hash from 'murmurhash-v3';

export async function run(
    client: FluorineClient,
    interaction: UserContextMenuInteraction<'cached'>
): Promise<void> {
    const user = interaction.targetUser;

    const percent = ['478823932913516544', '348591272476540928'].includes(
        user.id
    )
        ? 100
        : hash(user.toString()) % 101;

    interaction.reply(
        client.language.get(interaction.locale, 'HOWGAY', {
            percent,
            thing: user
        })
    );
}

export const data = new ContextMenuCommandBuilder()
    .setName('How Gay')
    .setType(ApplicationCommandType.User);