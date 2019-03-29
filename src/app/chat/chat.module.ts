import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './messages/message/message.component';
import { CraftMessageComponent } from './messages/craft-message/craft-message.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    ChatComponent,
    ChannelsComponent,
    ChannelComponent,
    MessagesComponent,
    MessageComponent,
    CraftMessageComponent,
    SettingsComponent],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
